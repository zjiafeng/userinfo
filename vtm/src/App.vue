<template>
  <div id="app">
    <router-link to="/usertest">测试</router-link>  |
    <router-link to="/hardware/idcard">身份证硬件测试</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  a{
    text-decoration: none;
  }
</style>
