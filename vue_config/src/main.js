import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './router/intercept';
import store from './store';
import Mint from 'mint-ui';
import 'lib-flexible';
import './styles/main.less';
import { post, fetch }  from "../config/axios";
import 'swiper/css/swiper.css';
import 'mint-ui/lib/style.css';

Vue.use(Mint);
Vue.prototype.$get=fetch;
Vue.prototype.$post=post;
Vue.config.productionTip = false

/* 解决移动端300ms延迟的问题 */
import FastClick from 'fastclick';
FastClick.attach(document.body);

Vue.config.devtools = process.env.NODE_ENV === 'development';//生产版本设为 true 可以启用检查
Vue.config.productionTip = process.env.NODE_ENV === 'production';//设置为 false 以阻止 vue 在启动时生成生产提示


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
