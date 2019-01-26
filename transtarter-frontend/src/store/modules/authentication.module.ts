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

@Module({ dynamic: true, store, name: 'auth', namespaced: true })
export class Authentication extends VuexModule implements IAuthState {
  private localStorageKey = 'user'
  private userInfoString = localStorage.getItem(this.localStorageKey)
  private user = this.userInfoString ? JSON.parse(this.userInfoString) : null;

  public name = ((this.user || '').profile || '').name || '';
  public email = '';
  public password = '';
  public token = (this.user || '').access_token || ''
  public roles = [];
  public status =
    {
      loggingIn: false,
      loggedIn: this.user !== null && !(this.user || false).expired // we should get user info and expired have to be false
    };
  public avatar = '';

  auth = new AuthService()

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
      this.auth.saveUserInfo(this.localStorageKey, user)
      this.context.commit('SUCCESS_LOGIN', user)
    } else {
      this.context.commit('ERROR_LOGIN')
    }
  }

  @Action({ commit: 'LOGOUT' })
  logout () {
    this.auth.logout()
    this.auth.removeFromLocalStorageByKey(this.localStorageKey)
  }
}

export const AuthModule = getModule(Authentication, store)
