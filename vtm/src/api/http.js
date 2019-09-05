import axios from 'axios'
// axios 配置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8' //设置请求头
//axios.defaults.withCredentials = true // 带cookie请求
// Axios实现请求重试
axios.defaults.retry = 1 // 重试次数
axios.defaults.retryDelay = 1000 // 重试延时
// axios.defaults.shouldRetry = (warning) => true // 重试条件，默认只要是错误都需要重试
// 封装get方法
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(this.baseURL + url, {
      params: params
    }).then(response => {
      if (response.data !== 200) {
        // this.$router.push('/')
      }
      resolve(response.data)
    }).catch(err => {
      reject(err)
      // sessionStorage.removeItem('token')
    })
  })
}

/* 封装post方法 */
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(this.baseURL + url, data).then(response => {
      if (response.data !== 200) {
        // this.$router.push('/')
      }
      resolve(response.data)
    }).catch(err => {
      reject(err)
      // sessionStorage.removeItem('token')
    })
  })
}
