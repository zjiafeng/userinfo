import Vue from 'vue';
import VueRouter from 'vue-router';
const Login = () => import('@/views/login/login.vue'); //登录
const Register = () => import('@/views/login/register.vue'); //注册
const Index = () => import('@/views/index/index.vue'); //首页
const IsIndex = () => import('@/views/index/isindex.vue'); //首页
const NewCenter = () => import('@/views/index/newcenter.vue'); //新闻资讯
const Culture = () => import('@/views/index/culture.vue'); //企业文化
const FenjiuCulture = () => import('@/views/index/fenjiuculture.vue'); //汾酒文化
const Product = () => import('@/views/index/product.vue'); //产品博览
const ProductKnow = () => import('@/views/index/productknow.vue'); //汾酒文化
const Company = () => import('@/views/index/company.vue'); //公司概括
const Introduce = () => import('@/views/index/introduce.vue'); //景区介绍
const Scenic = () => import('@/views/index/scenic.vue'); //网上浏览
const Cyzs = () => import('@/views/index/cyzs.vue'); //餐饮住宿
const Ylzn = () => import('@/views/index/ylzn.vue'); //游览指南

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Login',
    name: 'login',
    component: Login
  },{
    path: '/Register',
    name: 'register',
    component: Register
  },
  {
    path: '/Index',
    name: 'index',
    component: Index,
    redirect: '/Index/isindex',
    children: [
      {
        path: '/Index/isindex',
        name: 'isindex',
        component: IsIndex,
      },
      {
        path: '/Index/newcenter',
        name: 'newcenter',
        component: NewCenter,
      },
      {
        path: '/Index/culture',
        name: 'culture',
        component: Culture,
      },
      {
        path: '/Index/fenjiuculture',
        name: 'fenjiuculture',
        component: FenjiuCulture,
      },
      {
        path: '/Index/product',
        name: 'product',
        component: Product,
      },
      {
        path: '/Index/productknow',
        name: 'productknow',
        component: ProductKnow,
      },
      {
        path: '/Index/company',
        name: 'company',
        component: Company,
      },
      {
        path: '/Index/introduce',
        name: 'introduce',
        component: Introduce,
      },
      {
        path: '/Index/scenic',
        name: 'scenic',
        component: Scenic,
      },
      {
        path: '/Index/cyzs',
        name: 'cyzs',
        component: Cyzs,
      },
      {
        path: '/Index/ylzn',
        name: 'ylzn',
        component: Ylzn,
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router
