import axios from 'axios'
import { Guid } from 'guid-typescript'
import { UserProfile } from '@/models/UserProfile'

export class ProfileService {
    private webAppHost = process.env.VUE_APP_WEB_APP;

    public getProfileInfoByUserId (userId : Guid) {
      return axios.get<UserProfile>(`${this.webAppHost}/api/profile/${userId}`)
        .then(x => x)
    }

    public updateProfileInfo (updatedUserProfile: UserProfile) {
      return axios.put<boolean>(`${this.webAppHost}/api/profile`, updatedUserProfile)
        .then(x => x)
    }
}
