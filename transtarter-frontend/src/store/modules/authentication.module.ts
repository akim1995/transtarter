import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import { store } from '../index'

import AuthService from '@/services/auth.service'

const auth = new AuthService()

export interface IAuthState {
  name: string;
  email: string;
  password: string
  token: string;
  avatar: string;
  roles: string[];
  status: {
    loggingIn: boolean,
    loggedIn: boolean
  }
}

@Module({ dynamic: true, store, name: 'auth', namespaced: true })
export class Authentication extends VuexModule implements IAuthState {
  public name = '';
  public email = '';
  public password = '';
  public token = '';
  public roles = [];
  public status =
    {
      loggingIn: false,
      loggedIn: false
    };
  public avatar = '';

  accessTokenExpired: boolean | undefined;

  @Mutation
  LOGIN_REQUEST () {
    this.status.loggingIn = true
  }

  @Mutation
  LOGOUT () {
    this.status.loggedIn = false
    this.status.loggingIn = false
  }

  @Action({ commit: 'LOGIN_REQUEST' })
  public async login (userInfo: { email: string, password: string }): Promise<any> {
    auth.login()

    const user = await auth.getUser()
    debugger
    // if (user) {
    //   this.name = user.profile.name
    //   this.accessTokenExpired = user.expired

    //   this.status.loggedIn = user !== null && !user.expired
    // }

    return 1
  }

  @Action({ commit: 'LOGOUT' })
  logout () {
    // auth.logout()
    console.log('logout')
  }
}

export default getModule(Authentication)

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
