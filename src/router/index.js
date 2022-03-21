import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Checkout from '../views/Checkout.vue'
import MarketPlace from '../views/MarketPlace.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/MarketPlace/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/MarketPlace',
    name: 'MarketPlace',
    component: MarketPlace,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
