import { Component, Vue } from 'vue-property-decorator'
import { eventBus } from '../main'
// components
import Header from '@/components/shared/header/header.vue'
import Footer from '@/components/shared/footer/footer.vue'
import SelectCity from '@/components/shared/select-city/select-city.vue'
import UserSidebar from '@/components/user-profile/user-sidebar/user-sidebar.vue'
import PersonalManager from '@/components/user-profile/personal-manager/personal-manager.vue'
import ProfileSettings from '@/components/user-profile/profile-settings/profile-settings.vue'
// popups
import Registration from '@/components/authorization/registration/registration.vue'
import LogIn from '@/components/authorization/log-in/log-in.vue'
import PasswordRestore from '@/components/authorization/password-restore/password-restore.vue'
import PasswordSuccessRestore from '@/components/authorization/password-success-restore/password-success-restore.vue'
import RequestCall from '@/components/shared/request-call/request-call.vue'
// store modules
import { AuthModule } from '../store/modules/authentication.module'

@Component({
  components: {
    Header,
    Footer,
    UserSidebar,
    PersonalManager,
    ProfileSettings,
    SelectCity,
    // popups
    Registration,
    LogIn,
    PasswordRestore,
    PasswordSuccessRestore,
    RequestCall
  }
})
export default class UserProfile extends Vue {
    show = {
      registration: false,
      logIn: false,
      restorePassword: false,
      successRestore: false,
      selectCity: true // add logic if city isn't in localstorage
    };

    toggleShowLogIn () {
      this.show.logIn = !this.show.logIn
    }

    get loggedIn () {
      return AuthModule.status.loggedIn
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
