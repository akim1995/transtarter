import Vue from 'vue'
import Vuex from 'vuex'

import authentication from '../store/authentication.module'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    authentication
  }
})
