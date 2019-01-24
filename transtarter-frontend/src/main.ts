import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faMapMarkerAlt, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faVk, faTelegram, faWhatsapp, faViber } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faShoppingCart, faMapMarkerAlt, faSearch, faTimes, faVk, faTelegram, faWhatsapp, faViber)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
