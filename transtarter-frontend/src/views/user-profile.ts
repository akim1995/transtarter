import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/shared/header/header.vue'
import Footer from '@/components/shared/footer/footer.vue'
import UserSidebar from '@/components/user-profile/user-sidebar/user-sidebar.vue'
import PersonalManager from '@/components/user-profile/personal-manager/personal-manager.vue'
import ProfileSettings from '@/components/user-profile/profile-settings/profile-settings.vue'

// popups
import Registration from '@/components/authorization/registration/registration.vue'
import LogIn from '@/components/authorization/log-in/log-in.vue'
import PasswordRestore from '@/components/authorization/password-restore/password-restore.vue'
import PasswordSuccessRestore from '@/components/authorization/password-success-restore/password-success-restore.vue'

import { eventBus } from '../main'

import AuthService from '../services/auth.service' // idk why @ doesn't work here

const auth = new AuthService()

@Component({
  components: {
    Header,
    Footer,
    UserSidebar,
    PersonalManager,
    ProfileSettings,
    // popups
    Registration,
    LogIn,
    PasswordRestore,
    PasswordSuccessRestore
  }
})
export default class UserProfile extends Vue {
    // oidc
    public currentUser: string = '';
    public accessTokenExpired: boolean | undefined = false;
    public isLoggedIn: boolean = false;

    get username (): string {
      return this.currentUser
    }

    public login () {
      debugger
      auth.login()
    }

    public logout () {
      auth.logout()
    }

    public mounted () {
      debugger
      auth.getUser().then(user => {
        this.currentUser = user.profile.name
        this.accessTokenExpired = user.expired

        this.isLoggedIn = user !== null && !user.expired
      })
    }

    // main

    show = {
      registration: false,
      logIn: false,
      restorePassword: false,
      successRestore: false
    };

    toggleShowLogIn () {
      this.show.logIn = !this.show.logIn
    }

    created () {
      eventBus.$on('toggle-registration-popup', () => {
        this.show.registration = !this.show.registration
      })

      eventBus.$on('toggle-log-in-popup', () => {
        this.show.logIn = !this.show.logIn
      })

      eventBus.$on('toggle-restore-popup', () => {
        this.show.restorePassword = !this.show.restorePassword
      })

      eventBus.$on('toggle-success-restore-popup', () => {
        this.show.successRestore = !this.show.successRestore
      })

      eventBus.$on('close-log-in-and-open-registration', () => {
        this.show.logIn = false
        this.show.registration = true
      })

      eventBus.$on('close-log-in-and-open-restore-password', () => {
        this.show.logIn = false
        this.show.restorePassword = true
      })

      eventBus.$on('close-registration-and-open-log-in', () => {
        this.show.registration = false
        this.show.logIn = true
      })

      eventBus.$on('close-restore-and-open-success-restore', () => {
        this.show.restorePassword = false
        this.show.successRestore = true
      })
    }
}
