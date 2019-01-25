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

const auth = new AuthService()

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
    // auth.logout()
    auth.login()
    const user = await auth.getUser()

    if (user) {
      auth.saveUserInfo(user)
      this.context.commit('SUCCESS_LOGIN', user)
    } else {
      this.context.commit('ERROR_LOGIN')
    }
  }

  @Action({ commit: 'LOGOUT' })
  logout () {
    debugger
    auth.logout()
    auth.removeFromLocalStorageByKey('user')
  }
}

export const AuthModule = getModule(Authentication, store)
