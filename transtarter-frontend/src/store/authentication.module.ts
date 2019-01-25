import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

import AuthService from '@/services/auth.service' // idk why @ doesn't work here

const auth = new AuthService()

class User {
  constructor () {
    this.name = ''
    this.email = ''
    this.password = ''
  }

  name: string;
  email: string;
  password: string
}

@Module
export default class Authentication extends VuexModule {
    status = {
      loggingIn: false,
      loggedIn: false
    }
    user = new User();
    accessTokenExpired: boolean | undefined;

    @Action({ commit: 'loginRequest' })
    login () {
      auth.login()

      auth.getUser().then(user => {
        if (user) {
          this.user.name = user.profile.name
          this.accessTokenExpired = user.expired

          this.status.loggedIn = user !== null && !user.expired
        } else {

        }
      })
    }

    @Action({ commit: 'logout' })
    logout () {
      auth.logout()
    }

    @Mutation
    loginRequest () {
      this.status.loggingIn = true
    }

    @Mutation
    logoutMutation () {
      this.status.loggedIn = false
      this.status.loggingIn = false
    }
}

// export const authentication = {
//   namespaced: true,
//   state: {},
//   actions: {
//     login ({ dispatch, commit }, { email, password }) {
//       commit('loginRequest', { login })
//     },
//     logout ({ commit }) {
//       userService.logout()
//       commit('logout')
//     }
//   },
//   mutations: {
//     loginRequest (state, user) {
//       state.status = { loggingIn: true }
//       state.user = user
//     },
//     loginSuccess (state, user) {
//       state.status = { loggedIn: true }
//       state.user = user
//     },
//     loginFailure (state) {
//       state.status = {}
//       state.user = null
//     },
//     logout (state) {
//       state.status = {}
//       state.user = null
//     }
//   },
//   getters: {
//     // loggingIn: state => {
//     //   return state.status.loggingIn
//     // },
//     // loggedIn: state => {
//     //   return state.status.loggedIn
//     // }
//   }
// }
