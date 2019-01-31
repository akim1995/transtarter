import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import { store } from '../index'

import { AuthService } from '@/services/auth.service'
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
  public token = (this.user || '').id_token || ''
  public roles = [];
  public status =
    {
      loggingIn: false,
      loggedIn: this.user !== null && !(this.user || false).expired // we should get user info and expired have to be false
    };
  public avatar = '';

  accessTokenExpired: boolean | undefined;

  auth = new AuthService()

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
    this.token = user.id_token
    this.accessTokenExpired = user.expired
    this.status.loggedIn = user !== null && !user.expired
    this.status.loggingIn = false
  }

  @Mutation
  ERROR_LOGIN (user: User) {
    this.name = ''
    this.accessTokenExpired = false
    this.status.loggedIn = false
    this.status.loggingIn = false
  }

  @Mutation
  MOCK_LOGIN () {
    this.status.loggedIn = true
  }

  @Mutation
  MOCK_LOGOUT () {
    this.status.loggedIn = false
  }

  @Action
  public login (): void {
    this.auth.login()
  }

  @Action
  public async actualizeUser () {
    const user = await this.auth.getUser()
    if (user) {
      this.auth.saveUserInfo(this.localStorageKey, user)
      this.context.commit('SUCCESS_LOGIN', user)
    } else {
      this.context.commit('ERROR_LOGIN')
    }
  }

  @Action
  logout () {
    this.context.commit('LOGOUT')
    this.auth.removeFromLocalStorageByKey(this.localStorageKey)
    this.auth.logout()
  }

  @Action
  mockLogin () {
    this.context.commit('MOCK_LOGIN')
  }

  @Action
  mockLogout () {
    this.context.commit('MOCK_LOGOUT')
  }
}

export const AuthModule = getModule(Authentication, store)
