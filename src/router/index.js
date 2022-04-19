import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Checkout from '../views/Checkout.vue'
import MarketPlace from '../views/MarketPlace.vue'
import Dashboard from '../views/Admin/Dashboard.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import NotFound from '../views/NotFound.vue'
import ForgotPassword from '../views/ForgotPassword.vue'

Vue.use(VueRouter)

const routes = [
  //public routes
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:"Home",
    }
  },
  {
    path: '/MarketPlace/checkout',
    name: 'Checkout',
    component: Checkout,
    meta:{
      title:"checkout",
    }
  },
  {
    path: '/MarketPlace',
    name: 'MarketPlace',
    component: MarketPlace,
    meta:{
      title:"marketplace",
    }
  },

  //Admin route with user auth

  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      title:"Login",
    }
  },

  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta:{
      title:"Register",
    }
  },

  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta:{
      title:"Forgot password",
    }
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta:{
      title:"dashboard",
    }
  },

  {
    path:'/:catchAll(.*)*',
    name:'NotFound',
    component:NotFound,
    meta:{
      title:"page not found",
    }
  },
  //Admin route 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to , from , next) => {
  let documentTitle = `Gobble | ${to.meta.title}`;
  document.title = documentTitle;
  next()
});

export default router
