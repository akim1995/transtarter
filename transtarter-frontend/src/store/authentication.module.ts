import AuthService from '@/services/auth.service' // idk why @ doesn't work here

const auth = new AuthService()

export const authentication = {
  namespaced: true,
  state: {},
  actions: {
    login ({ dispatch, commit }, { email, password }) {
      commit('loginRequest', { login })
    },
    logout ({ commit }) {
      userService.logout()
      commit('logout')
    }
  },
  mutations: {
    // loginRequest (state, user) {
    //   state.status = { loggingIn: true }
    //   state.user = user
    // },
    // loginSuccess (state, user) {
    //   state.status = { loggedIn: true }
    //   state.user = user
    // },
    // loginFailure (state) {
    //   state.status = {}
    //   state.user = null
    // },
    // logout (state) {
    //   state.status = {}
    //   state.user = null
    // }
  },
  getters: {
    // loggingIn: state => {
    //   return state.status.loggingIn
    // },
    // loggedIn: state => {
    //   return state.status.loggedIn
    // }
  }
}
