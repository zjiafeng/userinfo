<template>
  <div class="usertest">
    <h2>测试目录</h2>
    <p>vuex</p>
    <p>token:{{this.$store.state.token}}</p>
    <ul>
      <li>姓名:{{userinfo.name}}</li>
      <li>年龄:{{userinfo.age}}</li>
      <li>性别:{{userinfo.sex}}</li>
      <li>{{userinfo.like[0]}}</li>
    </ul>
    <button @click="addage()">点击年龄增加</button>
    <button @click="post()">测试post请求</button>
    <p>{{test}}</p>
  </div>
</template>

<script>
  export default {
    name: 'usertest',
    data() {
      return {
        test: sessionStorage.getItem('test')
      }
    },
    computed: {
      userinfo() {
        return this.$store.state.userinfo
      }
    },
    methods: {
      addage() {
        this.$store.commit('addage');
      },
      post() {
        this.$post(this.$url.login, {

        }).then(res => {
          console.log(res)
          sessionStorage.setItem('test',JSON.stringify(res))
          console.log(sessionStorage.getItem('test'))
        })
      }
    },
  }
</script>

<style lang="less" scoped="scoped">
  .usertest {
    h2 {
      margin-top: 20px;
    }
  }
</style>
