<template>
  <div id="index">
    <el-container>
      <el-header>
        <div class="left">
          <img src="@/assets/img/icon.png" alt />
          <p>
            汾酒集团丨
            <span>FENJIU GROUP</span>
          </p>
        </div>
        <div></div>
        <div class="right">
          <span>
            {{date}}
            {{week}}
            {{time}}
          </span>
          <el-dropdown size="medium" split-button type="primary">
            <i class="el-icon-user-solid"></i>
            欢迎，{{username}}！
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <span @click="exit()">
                  <i class="el-icon-s-unfold"></i>退出登录！
                </span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container style="margin-top: 60px;">
        <el-aside width="300px">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#409EFF"
          >
            <el-menu-item index="2" @click="()=>{this.$router.push('/Index/isindex')}">
              <i class="el-icon-s-data"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-operation"></i>
                <span>新闻</span>
              </template>
              <el-menu-item index="1-1" @click="()=>{this.$router.push('/Index/NewCenter')}">新闻资讯</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-order"></i>
                <span>文化</span>
              </template>
              <el-menu-item index="2-1" @click="()=>{this.$router.push('/Index/Culture')}">企业文化</el-menu-item>
              <el-menu-item index="2-2" @click="()=>{this.$router.push('/Index/FenjiuCulture')}">汾酒文化</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-shopping-cart-2"></i>
                <span>产品</span>
              </template>
              <el-menu-item index="3-1" @click="()=>{this.$router.push('/Index/Product')}">产品博览</el-menu-item>
              <el-menu-item index="3-2" @click="()=>{this.$router.push('/Index/ProductKnow')}">产品知识</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-office-building"></i>
                <span>公司</span>
              </template>
              <el-menu-item index="4-1" @click="()=>{this.$router.push('/Index/Company')}">公司概括</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-bicycle"></i>
                <span>旅游</span>
              </template>
              <el-menu-item index="5-1" @click="()=>{this.$router.push('/Index/Introduce')}">景区介绍</el-menu-item>
              <el-menu-item index="5-2" @click="()=>{this.$router.push('/Index/Scenic')}">网上游览</el-menu-item>
              <el-menu-item index="5-3" @click="()=>{this.$router.push('/Index/Cyzs')}">餐饮住宿</el-menu-item>
              <el-menu-item index="5-4" @click="()=>{this.$router.push('/Index/Ylzn')}">游览指南</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "index",
  computed: {
    ...mapState(["username"])
  },
  data() {
    return {
      time: "",
      date: "",
      week: ""
    };
  },
  created() {
    this.$message({
      message: "欢迎回来！",
      type: "success"
    });
  },
  mounted() {
    this.getdate();
    this.timer = setInterval(() => {
      this.getdate();
    }, 1000);
  },
  methods: {
    //动态获取时间
    getdate() {
      var datetime = new Date();
      var year = datetime.getFullYear();
      var month =
        datetime.getMonth() + 1 < 10
          ? "0" + (datetime.getMonth() + 1)
          : datetime.getMonth() + 1;
      var date =
        datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
      var hour =
        datetime.getHours() < 10
          ? "0" + datetime.getHours()
          : datetime.getHours();
      var minute =
        datetime.getMinutes() < 10
          ? "0" + datetime.getMinutes()
          : datetime.getMinutes();
      var second =
        datetime.getSeconds() < 10
          ? "0" + datetime.getSeconds()
          : datetime.getSeconds();
      var myddy = new Date().getDay();
      var weekday = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      ];
      this.time = hour + ":" + minute + ":" + second;
      this.date = year + "/" + month + "/" + date;
      this.week = weekday[myddy];
    },
    exit() {
      this.$router.push({
        path: "/login"
      });
    }
  }
};
</script>

<style scoped="scoped" lang="less">
.el-menu-item {
  width: 300px;
}
.el-submenu {
  border-top: 1px solid #333;
  width: 300px;
}
.el-container {
  height: 100vh;
}

.el-header {
  // margin: 0;
  padding: 0;
  // background-color: rgb(255, 255, 255);
  color: #333;
  display: flex;
  line-height: 60px;
  position: fixed;
  height: 60px;
  width: 100%;
  justify-content: space-between;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  .left {
    width: 300px;
    display: flex;
    img {
      width: 50px;
      height: 50px;
      margin: 5px;
    }
    p {
      font-weight: 600;
      font-size: 20px;
      span {
        color: #409eff;
      }
    }
  }

  .right {
    margin: 0 30px;
    span {
      font-weight: 600;
      display: inline-block;
      width: 230px;
    }
  }
}

.el-aside {
  background-color: rgb(43, 46, 51);
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: 30px;
}
</style>
