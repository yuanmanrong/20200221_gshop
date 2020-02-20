/*路由器对象模块*/
import Vue from  'vue'
import VueRouter from 'vue-router'
import Msite from  '../pages/Msite/Msite'
import Order from  '../pages/Order/Order'
import Search from  '../pages/Search/Search'
import Profile from  '../pages/Profile/Profile'
import Login from '../pages/Login/Login'

//声明使用插件
Vue.use(VueRouter)

//向外暴露所有路由
export  default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:Msite
    },
    {
      path:'/order',
      component:Order
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/',
      redirect:'/msite'
    }
  ]
})
