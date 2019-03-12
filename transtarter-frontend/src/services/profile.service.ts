import axios from 'axios'
import { IUserProfile } from '@/models/IUserProfile'
import { User } from 'oidc-client'
import { store } from '@/store/index'

export class ProfileService {
    private webAppHost = process.env.VUE_APP_WEB_APP;
    private identityServerHost = process.env.VUE_APP_IDENTITY_SERVER;

    public getProfileInfoByUserId (login : string) {
      return axios.get<IUserProfile>(`${this.webAppHost}/api/profile/${login}`)
        .then(x => x)
    }

    public updateProfileInfo (updatedUserProfile: IUserProfile) {
      return axios.put<boolean>(`${this.webAppHost}/api/profile`, updatedUserProfile)
        .then(x => {
          this.updateUserName(updatedUserProfile.name)
          return x
        })
    }

    private updateUserName (newUserName: string) {
      const userKey = 'user'
      const additionalKey = `user:${this.identityServerHost}:kl`
      const user = localStorage.getItem(userKey)
      if (!user) { return }
      const userObject = JSON.parse(user) as User
      userObject.profile.name = newUserName
      userObject.profile.preferred_username = newUserName
      localStorage.setItem(userKey, JSON.stringify(userObject))
      store.dispatch('auth/updateUser', { additionalKey, userObject })
    }
}
