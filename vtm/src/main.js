import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index';
import axios from 'axios'
import {get, post} from './api/http'
import REST_URL from './api/url'
import './assets/css/reset.css'
//硬件js
// import '../static/hardware/device.js'
// import '../static/hardware/inhalitionidddevice.js'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.baseURL = process.env.API_ROOT
Vue.prototype.$url = REST_URL

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})

//添加请求拦截器
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

//添加响应拦截器
axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})
