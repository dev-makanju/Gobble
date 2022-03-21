import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Skeleton } from 'vue-loading-skeleton';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faSubtract } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add( faHatWizard );
library.add(faCartShopping);
library.add(faPlus);
library.add(faSubtract);
library.add(faTrash);
library.add(faHeart);
library.add(faTimes);
library.add(faCheck);
library.add(faHome)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('PuSkeleton' , Skeleton)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
