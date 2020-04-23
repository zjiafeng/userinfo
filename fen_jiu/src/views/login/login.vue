<template>
  <div id="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>欢迎登录 - 汾酒管理系统</span>
      </div>
      <el-input autofocus placeholder="请输入用户名称" clearable class="input" v-model="username"></el-input>
      <el-input
        placeholder="请输入用户密码"
        show-password
        class="input"
        v-model="password"
        @keyup.enter.native="login"
      ></el-input>
      <el-button type="primary" class="btn" @click="login()">登录</el-button>
      <span class="aspan" @click="()=>{this.$router.push({path:'/Register'})}">没有账号，请注册</span>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (this.username == "") {
        this.$message({
          message: "用户名称不能为空",
          type: "warning"
        });
      } else if (this.password == "") {
        this.$message({
          message: "用户密码不能为空",
          type: "warning"
        });
      } else {
        if (
          this.username === this.$store.state.username &&
          this.password === this.$store.state.password
        ) {
          this.$router.push({
            path:"/Index"
          })
        } else {
          this.$message({
            message: "用户名称或用户密码错误",
            type: "warning"
          });
        }
      }
    }
  }
};
</script>

<style lang="less" scoped="scoped">
#login {
  width: 100%;
  height: 100vh;
  background-color: #b6d1ed;
}

.btn {
  width: 440px;
  margin-bottom: 10px;
}

.input {
  margin: 10px 0;
}

.box-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.clearfix {
  text-align: center;
}
.box-card {
  width: 480px;
}
.aspan {
  font-size: 12px;
  color: #333;
  cursor: pointer;
  margin: 0 5px;
  // text-decoration: underline;
  position: absolute;
  right: 20px;
  &:hover{
    text-decoration: underline;
  }
}
</style>
