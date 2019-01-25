import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import { store } from '../index'

import AuthService from '@/services/auth.service'
import { User } from 'oidc-client'

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

const userInfoString = localStorage.getItem('user')
let user: User
if (userInfoString) {
  user = JSON.parse(userInfoString)
}

@Module({ dynamic: true, store, name: 'auth', namespaced: true })
export class Authentication extends VuexModule implements IAuthState {
  public name = ((user || '').profile || '').name || '';
  public email = '';
  public password = '';
  public token = (user || '').access_token || ''
  public roles = [];
  public status =
    {
      loggingIn: false,
      loggedIn: user !== undefined && !(user || false).expired // we should get user info and expired have to be false
    };
  public avatar = '';

  public auth = new AuthService()

  accessTokenExpired: boolean | undefined;

  get loggedIn () {
    return this.status.loggedIn
  }

  @Mutation
  LOGIN_REQUEST () {
    this.status.loggingIn = true
  }

  @Mutation
  LOGOUT () {
    this.status.loggedIn = false
    this.status.loggingIn = false
  }

  @Mutation
  SUCCESS_LOGIN (user: User) {
    this.name = user.profile.name
    this.token = user.access_token
    this.accessTokenExpired = user.expired
    this.status.loggedIn = user !== null // && !user.expired
    debugger
    this.status.loggingIn = false
  }

  @Mutation
  ERROR_LOGIN (user: User) {
    this.name = ''
    this.accessTokenExpired = false
    this.status.loggedIn = false
    this.status.loggingIn = false
  }

  @Action
  public async login (userInfo: { email: string, password: string }): Promise<any> {
    debugger
    this.auth.login()
    const user = await this.auth.getUser()

    if (user) {
      this.auth.saveUserInfo(user)
      this.context.commit('SUCCESS_LOGIN', user)
    } else {
      this.context.commit('ERROR_LOGIN')
    }
  }

  @Action({ commit: 'LOGOUT' })
  logout () {
    this.auth.logout()
    console.log('logout')
  }
}

export const AuthModule = getModule(Authentication, store)

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
