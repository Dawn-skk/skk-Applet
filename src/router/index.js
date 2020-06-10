import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home';
import Login from '../components/Login';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/login'
    },
    {
      path:'/Login',
      name:'Login',
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
