import Vue from 'vue';
import VueRouter from 'vue-router';

const Login = () => import('@/views/login/index');
const Error = () => import('@/views/error/index');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
	meta: {
	  title: '首页',
	  requireAuth: false, // 登录权限
	}
  },
  {
    path: '/error',
    name: 'error',
    component: Error,
    meta: {
      title: '404页'
    }
  },
  {
    path: '*',
    redirect: 'error',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
