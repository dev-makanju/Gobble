import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueSmoothScroll from 'vue2-smooth-scroll'
import  observer from './directives/observerApi'
import { Skeleton } from 'vue-loading-skeleton';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import vuelidate from 'vuelidate'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faSubtract } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCameraAlt } from '@fortawesome/free-solid-svg-icons'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faBorderNone } from '@fortawesome/free-solid-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faDashboard } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faCommentDollar } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Carousel3d from 'vue-carousel-3d';
import axios from 'axios'


library.add(faCartShopping)
library.add(faPlus)
library.add(faBoltLightning)
library.add(faMoneyBill)
library.add(faSubtract)
library.add(faHamburger)
library.add(faSearch)
library.add(faUserEdit)
library.add(faSignOut)
library.add(faTrash)
library.add(faBell)
library.add(faBorderNone)
library.add(faRefresh)
library.add(faCheckCircle)
library.add(faHeart)
library.add(faExclamationCircle)
library.add(faTimes)
library.add(faCameraAlt)
library.add(faCheck)
library.add(faAngleDown)
library.add(faHome)
library.add(faShoppingBag)
library.add(faLink)
library.add(faTrashAlt)
library.add(faEdit)
library.add(faDashboard)
library.add(faShoppingCart)
library.add(faCircleCheck)
library.add(faUserFriends)
library.add(faCommentDollar)
library.add(faAngleLeft)
library.add(faUpload)
library.add(faAngleRight)
library.add(faStore)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('PuSkeleton' , Skeleton)
Vue.config.productionTip = false
Vue.use(Carousel3d);
Vue.use(vuelidate);
Vue.use(vueSmoothScroll)
Vue.directive( "scrollAnimate" , observer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.prototype.http = axios

const token = localStorage.getItem("token");

//If there is any token we append it to the http default axios authorisation headers 
if(token){
  Vue.prototype.http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}