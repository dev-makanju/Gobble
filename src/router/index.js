import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Checkout from '../views/Checkout.vue'
import MarketPlace from '../views/MarketPlace.vue'
import Dashboard from '../views/Admin/Dashboard.vue'
import Customers from '../views/Admin/Customers.vue'
import payHistory from '../views/Admin/payHistory.vue'
import Product from '../views/Admin/Product.vue'
import CreateProduct from '../views/Admin/CreateProduct.vue'
import Order from '../views/Admin/Order.vue'
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
    path: '/dashboard/customers',
    name: 'Customers',
    component: Customers,
    meta:{
      title:"Customers",
    }  
  },
  {
    path: '/dashboard/payment-history',
    name: 'payHistory',
    component: payHistory,
    meta:{
      title:"payment-history",
    }  
  },
  {
    path: '/dashboard/product',
    name: 'Product',
    component: Product,
    meta:{
      title:"Product",
    }  
  },
  {
    path: '/dashboard/create-product',
    name: 'CreateProduct',
    component: CreateProduct,
    meta:{
      title:"create-product",
    }  
  },
  {
    path: '/dashboard/order',
    name: 'Order',
    component: Order,
    meta:{
      title:"Order",
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
  let documentTitle = `Gobble - ${to.meta.title}`;
  document.title = documentTitle;
  next()
});

export default router
