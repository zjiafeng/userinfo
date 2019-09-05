<template>
  <div>
    <h2>吸入二代证 demo</h2>
    <ul class="tip">
      <li>状态提示：</li>
      <li>操作：</li>
      <li>参数显示：</li>
    </ul>
    <ul class="info">
      <li>{{msg}}</li>
      <li>
        <button @click="start()">启动</button>
        <button @click="readcard()">读卡</button>
        <button @click="outcard()">退卡</button>
        <button @click="end()">停止</button>
      </li>
      <li>身份证正面：<img :src="'data:image/jpg;base64,'+cardInfo.FrontImage" alt=""></li>
      <li>身份证反面：<img :src="'data:image/jpg;base64,'+cardInfo.BackImage" alt=""></li>
      <li>身份证头像：<img :src="'data:image/jpg;base64,'+cardInfo.Chip.PhotoFileName" alt=""></li>
      <li>地址：{{cardInfo.Chip.Address}}</li>
      <li>民族：{{cardInfo.Chip.Nation}}</li>
      <li>姓名：{{cardInfo.Chip.Name}}</li>
      <li>性别：{{cardInfo.Chip.Sex}}</li>
      <li>出生日期：{{cardInfo.Chip.Born}}</li>
      <li>签发地址：{{cardInfo.Chip.GrantDept}}</li>
      <li>身份证号码：{{cardInfo.Chip.IDCardNO}}</li>
      <li>有效期起始日期：{{cardInfo.Chip.UserLifeBegin}}</li>
      <li>有效期结束日期：{{cardInfo.Chip.UserLifeEnd}}</li>
    </ul>
  </div>
</template>

<script>
  import logo from '@/assets/images/logo.png'

  export default {
    data() {
      return {
        "cardInfo": params.cardInfo,/* {
          "Chip": {
            "Address": "",
            "Born": "",
            "GrantDept": "",
            "IDCardNO": "",
            "IDType": "",
            "Name": "",
            "Nation": "",
            "PhotoFileName": "",
            "Sex": "",
            "UserLifeBegin": "",
            "UserLifeEnd": ""
          },
          "BackImage": logo, //证件背面图片读取结果状态
          "FrontImage": logo, //证件正面图片读取结果状态
          "BackImageStatus": "READ",
          "secretId": "secretId",
          "login_type": "0",
          "section": "",
          "ChipStatus": "READ",
          "FrontImageStatus": "READ",
          "Result": "Success"
        }, */
        msg: '请启动',
      }
    },
    methods: {
      //启动设备
      start() {
        openIdReadConn();
        this.msg = '设备已启动'
      },
      //读卡中
      readcard() {
        startReading();
        this.msg = '读卡中...'
      },
      //退卡中
      outcard() {
        outCard();
        this.msg = '退卡中...'
      },
      //关闭设备
      end() {
        closeIDReadingConn();
        this.msg = '设备已关闭'
      }
    },
    mounted() {

    }
  }
</script>

<style lang="less" scoped="scoped">
  h2 {
    margin: 20px 0;
  }

  ul li {
    display: flex;
    align-items: center;
    height: 30px;

    button {
      margin-right: 10px;
    }

    img {
      width: 54px;
      height: 32px;
    }
  }

  .tip {
    float: left;
    height: 500px;
  }
</style>
