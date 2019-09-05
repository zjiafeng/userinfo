<template>
	<div>
		<button @click="openConn()">打开设备</button>
		<button @click="importKey()">导入密钥</button>
		<button @click="getPin()">开启密文输入</button>
		<button @click="getData()">开启明文输入</button>
		<button @click="getPinAsync()">开启密文输入2</button>
		<button @click="reset()">复位</button>
		<button @click="close()">关闭设备</button>
		<table class="overviewSummary" width="500px" border="0" cellpadding="3" cellspacing="0">
			<tr>

				<td><b>设备运行状态信息：</b><br /><textarea disabled="disabled" rows="15" cols="50" id="msg" name="msg" style="width: 450px;height: 265px"></textarea></td>
			</tr>
		</table>
		<div id="content"></div>
	</div>
</template>

<script>
	import '../assets/hardware/device.js'
	import '../assets/hardware/marked.0.4.0.js'
	import '../assets/hardware/pincommondevice.js'
	import '../assets/hardware/callmethod.js'
	export default {
		name: 'signpen',
		methods: {
			openConn() {
				pinCommonDevice.SetAttribute("LogicalName", "aPinPad");
				// 2.打开连接
				var result = pinCommonDevice.OpenConnection();
				if (result == true) {
					alert("打开设备完成");
				} else {
					alert("打开设备失败");
				}
			},
			importKey() {
				var keyinfo = {
					"KeyName": "masterkey",
					"KeyValue": "0000000000000000",
					"Use": "KEYENCKEY"
				};
				// 预先得到的kcv
				var kcv = "1111111111111111";
				var rst = pinCommonDevice.ImportKey(JSON.stringify(keyinfo));
				show(rst);
			},
			getPin() {
				var dataInfo = {
					"MinLen": 6,
					"MaxLen": 6,
					"AutoEnd": true,
					"ActiveKeys": "NUMBERS,ENTER,CANCEL,CLEAR,BACKSPACE",
					"TerminateKeys": "ENTER,CANCEL"
				};
				pinCommonDevice.GetPin(JSON.stringify(dataInfo));
			},
			getPinAsync() {
				var dataInfo = {
					"MinLen": 6,
					"MaxLen": 6,
					"AutoEnd": true,
					"ActiveKeys": "NUMBERS,ENTER,CANCEL,CLEAR,BACKSPACE",
					"TerminateKeys": "ENTER,CANCEL"
				};
				pinCommonDevice.GetPinAsync(JSON.stringify(dataInfo));
			},
			getData() {
				var dataInfo = {
					"MaxKeys": 6, // 最大输入六位
					"AutoEnd": true, // 达到最大输入位数后自动结束输入
					"ActiveKeys": "NUMBERS,ENTER,CANCEL,CLEAR", // 激活数字键、确认键、取消键、清除键
					"TerminateKeys": "ENTER,CANCEL" // 使用确认键、取消键来结束输入
				};
				var result = pinCommonDevice.GetData(JSON.stringify(dataInfo));
				show("指令执行结果:" + result);
			},
			reset() {
				// 同步方法
				if (pinCommonDevice.Reset()) {
					alert("设备复位成功");
				} else {
					alert("设备复位失败");
				}
			},
			close() {
				pinCommonDevice.CloseConnectionAsync();
			},
			startEnable() {
				if (siuCommonDevice.EnableEvent()) {
					alert("启用状态改变事件成功");
				} else {
					alert("启用状态改变事件失败");
				}
			},
			GetStatus() {
				var status = pinCommonDevice.GetStatus();
				show("get status success : " + status);
			},
			show(str) {
				document.getElementById("msg").value = document.getElementById("msg").value + '\n' + str;
				document.getElementById("msg").scrollTop = document.getElementById("msg").scrollHeight;
				document.getElementById("msg").scrollTop = document.getElementById("msg").scrollHeight;
			}
		},
		mounted() {
			pinCommonDevice.onEvent = function(cmd) {
				switch (cmd) {
					case "OpenConnectionComplete":
						{
							// 处理连接设备完成后的操作
							alert("OpenConnectionComplete");
						}
						break;
					case "CloseConnectionComplete":
						{
							// 处理断开设备完成后的操作
							show("设备已关闭CloseConnectionComplete");
						}
						break;
					case "FatalError":
						{
							// 处理指令出错后的操作
							show("指令出错FatalError");
						}
						break;
					case "HWError":
						{
							// 处理设备故障后的操作
							show("处理设备故障后的操作HWError");
						}
						break;
					case "GetDataComplete":
						{
							// 明文输入完成
							var data = arguments[1];
							/*
			 parameter:{
				"Data" : "784529",
				"Result" : "Success"
			 }
			*/
							show("GetDataComplete with parameter:" + data);
						}
						break;
					case "GetPinComplete":
						{
							// 密文输入完成
							var data = arguments[1];
							show("GetPinComplete with parameter:" + data);
						}
						break;
					case "ResetComplete":
						{
							// 重置完成数据
							var data = arguments[1];
							alert("ResetComplete with parameter:" + data);
						}
						break;
					case "KeyPressed":
						{
							// 按键事件

							var key = arguments[1];
							var keycode = arguments[2];
							show("输入按键:" + key + " 键值:" + keycode);

						}
						break;

					case "InitializeComplete":
						{
							// 初始化完成
							var data = arguments[1];
							alert("InitializeComplete with parameter:" + data);
						}
						break;
					case "ImportKeyComplete":
						{
							// 导入密钥完成
							var data = arguments[1];
							alert("ImportKeyComplete with parameter:" + data);
						}
						break;
					case "ImportKeyExComplete":
						{
							// 导入密钥完成
							var data = arguments[1];
							alert("ImportKeyExComplete with parameter:" + data);
						}
						break;
					default:
						{
							alert("出现其他未知事件");
						}
						break;
				}
			}
		}
	}
</script>

<style>
</style>
