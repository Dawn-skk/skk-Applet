import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home';
import Login from '../components/Login';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'https://dawn-skk.github.io/skk-Applet/dist/',
      redirect:'/login'
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ],
  mode:'history'
})
