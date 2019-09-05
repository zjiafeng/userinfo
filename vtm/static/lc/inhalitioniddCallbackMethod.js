/*事件监听*/
inhalitionIddDevice.onEvent = function (cmd, args) {
    switch (cmd) {
        case  'OpenConnectionOver':
            console.log("读卡器连接成功－－－");
            AcceptAndReadTracks();
			showEvent("事件："+cmd+"   信息：读卡器连接成功－－－");
            break;
        case 'ReadRawDataComplete':
			showEvent("事件："+cmd+"   信息： 身份证读取成功－－－");
			ShowInfo("  ReadRawDataComplete   身份证读取成功－－－");
			var data = JSON.parse(arguments[1]);
            //if (data["Result"] == "Success")
            //alert("进卡读卡完成"+JSON.stringify(data));
            //var status = eval(args).chipdata.status;
            //var datas = eval(args);
      vtmDatatransforJson(data)
			ShowInfo("身份证读取成功info－－－:"  +JSON.stringify(data));
			ShowInfo("身份证读取成功－－－:"  +JSON.stringify(params));

            if (data["Result"] == "Success") {
                outCard();
                //vtmDatatransforJson(datas,eval(args).chipdata.datas);
				//setTimeout(function(){inhalitionIddData(data);}, 50);
				// setTimeout(function(){inhalitionIddData(params);}, 50);
                break;
            }
            else {
                reset();
            }
			showEvent("读卡器连接成功－－－");
            break;
        case  'ResetOver':
            // 	console.log("复位ok");
			showEvent("事件："+cmd+"   信息： 复位ok");
            break;
        case 'EjectOver':
            // 	console.log("退卡OK!");
			showEvent("事件："+cmd+"   信息： 退卡OK");
            break;
        case 'CardAccepted':
            // 	console.log("读卡器读取到数据!");
			showEvent("事件："+cmd+"   信息： 读卡器读取到数据");
            break;
        case 'CardInvalid':
            // 	console.log("检测到非法磁道数据!");
			showEvent("事件："+cmd+"   信息： 检测到非法磁道数据");
            break;
        case 'CardAcceptCancelled':
            // 	console.log("异步进卡被取消!" + args);
			showEvent("事件："+cmd+"   信息： 异步进卡被取消  "+args );
            break;
        case 'CardTaken':
            // 	console.log("卡片被取走!");
			showEvent("事件："+cmd+"   信息： 卡片被取走  " );
            break;
        case  'CloseConnectionOver'        :
            // 	console.log("close ok!");
			showEvent("事件："+cmd+"   信息： close ok!  " );
            break;
        case 'DeviceError':
            // 	console.log("执行:" + args.cmdName + "出错" + args.errorcode);
			showEvent("事件："+cmd+"   信息： "+"执行:" + args.cmdName + "出错" + args.errorcode );
            break;
        case 'CardInserted':
            // 	console.log("有卡插入!");
			showEvent("事件："+cmd+"   信息：有卡插入 " );
            break;
        case 'Timeout':
            // 	console.log("操作" + args.cmdName + "超时");
			showEvent("事件："+cmd+"   信息： " +"操作" + args.cmdName + "超时");
            break;
        case 'ErrorInfoReceived':
            // 	console.log("系统硬件错误:" + args);
			showEvent("事件："+cmd+"   信息： " +"系统硬件错误:" + args);
            break;
        case 'StatusChanged' :
            // 	console.log("状态改变" + args.newStatus);
			showEvent("事件："+cmd+"   信息： " +"状态改变" + args.newStatus);
            break;
        default:
            // 	console.log('cmd :' + cmd + ' args :' + args);
			showEvent("事件："+cmd+"   信息：default " +"" + 'cmd :' + cmd + ' args :' + args);
            break;

    }
};

//是否回传事件提示
function showEvent(txt){
    // if(showStatus) setTimeout(function(){InhalitionIddMsg(txt);}, 5);
}
