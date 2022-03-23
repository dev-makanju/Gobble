import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Checkout from '../views/Checkout.vue'
import MarketPlace from '../views/MarketPlace.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
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
  {
    path:'/:catchAll(.*)*',
    name:'NotFound',
    component:NotFound,
    meta:{
      title:"page not found",
    }
  },
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
