import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
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
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faDashboard } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faCommentDollar } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Carousel3d from 'vue-carousel-3d';
import axios from 'axios'


library.add(faCartShopping)
library.add(faPlus)
library.add(faSubtract)
library.add(faSearch)
library.add(faTrash)
library.add(faBell)
library.add(faCheckCircle)
library.add(faHeart)
library.add(faExclamationCircle)
library.add(faTimes)
library.add(faCheck)
library.add(faAngleDown)
library.add(faHome)
library.add(faDashboard)
library.add(faShoppingCart)
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
Vue.directive( "scrollAnimate" , observer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.prototype.http = axios