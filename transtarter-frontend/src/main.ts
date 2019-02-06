import Vue from 'vue'
import App from './App.vue'
// import router from './router' // we don't use router at all right now
import { store } from './store/index'

import Axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = Axios

export const eventBus = new Vue()

new Vue({
  // router,
  store,
  render: h => h(App)
}).$mount('#app')
