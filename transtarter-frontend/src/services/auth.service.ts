import { UserManager, WebStorageStateStore, User } from 'oidc-client'

export default class AuthService {
    private userManager: UserManager;

    constructor () {
      const AUTH0_DOMAIN: string = 'http://144.76.133.147:5000'

      const settings: any = {
        userStore: new WebStorageStateStore({ store: window.localStorage }),
        authority: AUTH0_DOMAIN,
        client_id: 'skoruba_identity_admin',
        redirect_uri: 'http://localhost:8080/callback.html',
        response_type: 'id_token token',
        scope: 'openid profile',
        post_logout_redirect_uri: 'http://localhost:8080/',
        filterProtocolClaims: true,
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

    public getUser (): Promise<User> {
      return this.userManager.getUser()
    }

    public login (): Promise<void> {
      return this.userManager.signinRedirect()
    }

    public logout (): Promise<void> {
      return this.userManager.signinRedirect()
    }
}
