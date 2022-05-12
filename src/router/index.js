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
// import store from '../store'
// import EventService from '../Events/EventService'


Vue.use(VueRouter)

const routes = [
  //public routes
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:"Home",
      requiresAuth: false,
      requiresGuest: true,
    }
  },
  {
    path: '/MarketPlace/checkout',
    name: 'Checkout',
    component: Checkout,
    meta:{
      title:"checkout",
      requiresAuth: true,
    }
  },
  {
    path: '/MarketPlace',
    name: 'MarketPlace',
    component: MarketPlace,
    meta:{
      title:"marketplace",
      requiresAuth: false,
      requiresGuest: true,
    }
  },
  //Admin route with user auth
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      title:"Login",
      requiresAuth: false,
      requiresGuest: true,
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta:{
      title:"Register",
      requiresAuth: false,
      requiresGuest: true,
    }
  },
  {
    path: '/dashboard/customers',
    name: 'Customers',
    component: Customers,
    meta:{
      title:"Customers",
      requiresAuth: true,
    }  
  },
  {
    path: '/dashboard/payment-history',
    name: 'payHistory',
    component: payHistory,
    meta:{
      title:"payment-history",
      requiresAuth: true,
    }  
  },
  {
    path: '/dashboard/product',
    name: 'Product',
    component: Product,
    meta:{
      title:"Product",
      requiresAuth: true,
    }  
  },
  {
    path: '/dashboard/create-product',
    name: 'CreateProduct',
    component: CreateProduct,
    meta:{
      title:"create-product",
      requiresAuth: true,
    }  
  },
  {
    path: '/dashboard/order',
    name: 'Order',
    component: Order,
    meta:{
      title:"Order",
      requiresAuth: true,
    }  
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta:{
      title:"Forgot password",
      requiresAuth: false,
      requiresGuest: true,
    }
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta:{
      title:"dashboard",
      requiresAuth: true,
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

// router.beforeEach( async(to , from , next) => {
//     const user = store.getters.isLoggedIn;
//     const res = await EventService.getUserEvent();
//     if(to.matched.some(res => res.meta.requiresAuth)){
//       if(user){
//         if(res.status){
//           const role = res.data.data.role
//           if(role === "ADMIN"){
//             return next();
//           }return next({name:'Home'});
//         }
//       }return next({name:'Login'});
//     }else{
//       return next();
//     }
// });

router.beforeEach((to , from , next) => {
  let documentTitle = `Gobble - ${to.meta.title}`;
  document.title = documentTitle;
  next()
});

export default router
