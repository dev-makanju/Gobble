import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Skeleton } from 'vue-loading-skeleton';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add( faHatWizard );
library.add(faCartShopping);
library.add(faPlus);
library.add(faTrash );

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('PuSkeleton' , Skeleton)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
