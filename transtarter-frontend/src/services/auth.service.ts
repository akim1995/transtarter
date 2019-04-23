import { UserManager, WebStorageStateStore, User, UserManagerSettings } from 'oidc-client'
import axios from 'axios'
import CookieStore from './CookieStore';

type UserRegistration = {
  login: string;
  password: string;
}

export class AuthService {
  private userManager: UserManager;
  private identityServer = process.env.VUE_APP_IDENTITY_SERVER;
  private identityServerApi = process.env.VUE_APP_IDENTITY_SERVER_API;
  private webAddress = process.env.VUE_APP_WEB_APP;

  constructor () {
    const AUTH0_DOMAIN = this.identityServer
    const MY_HOST: string = window.location.origin

    const settings: UserManagerSettings = {
      userStore: new WebStorageStateStore({ store: CookieStore }),
      stateStore: new WebStorageStateStore({ store: CookieStore }),
      authority: AUTH0_DOMAIN,
      client_id: 'kl',
      redirect_uri: `${this.webAddress}/callback.html`,
      post_logout_redirect_uri: `${MY_HOST}/`,
      response_type: 'id_token token',
      scope: 'openid profile roles',
      filterProtocolClaims: true,
      loadUserInfo: true,
      metadata: {
        issuer: 'identity',
        authorization_endpoint: AUTH0_DOMAIN + '/connect/authorize',
        userinfo_endpoint: AUTH0_DOMAIN + '/connect/userinfo',
        end_session_endpoint: AUTH0_DOMAIN + '/connect/endsession',
        jwks_uri: AUTH0_DOMAIN + '/.well-known/openid-configuration/jwks'
      }
    }

    this.userManager = new UserManager(settings)
  }

  public registration (user: UserRegistration) {
    return axios.post<boolean>(`${this.identityServerApi}/api/account/register`, user)
  }

  public getUser (): Promise<User> {
    return this.userManager.getUser()
  }

  public login (): Promise<void> {
    return this.userManager.signinRedirect()
  }

  public logout (): Promise<void> {
    return this.userManager.signoutRedirect()
  }

  public saveUserInfo (key: string, user: User): void {
    CookieStore.setItem(key, JSON.stringify(user))
  }

  public removeFromCookieStorageByKey (key: string): void {
    CookieStore.removeItem(key)
  }

  public updateUserStorage (key:string, userObject: User): void {
    this.userManager.settings.userStore.set(key, JSON.stringify(userObject))
  }
}
