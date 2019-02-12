import axios from 'axios'
import { Guid } from 'guid-typescript'
import { UserProfile } from '@/models/UserProfile'

export class ProfileService {
    private webAppHost = process.env.VUE_APP_WEB_APP;

    public getProfileInfoByUserId (userId : Guid): Promise<any> {
      return axios.get<UserProfile>(`${this.webAppHost}/api/profile/${userId}`)
    }
}
