import Vue from 'vue'
import Router from 'vue-router'
import usertest from '@/pages/usertest'
import idcard from '@/pages/hardware/idcard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/usertest'
    },
    {
      path: '/usertest',
      name: 'usertest',
      component: usertest
    },
    {
      path: '/hardware/idcard',
      name: 'idcard',
      component: idcard
    }
  ]
})
