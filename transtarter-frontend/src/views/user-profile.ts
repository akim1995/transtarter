import { Component, Vue, Watch } from 'vue-property-decorator'
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
  showPopup = {
    registration: false,
    logIn: false,
    restorePassword: false,
    successRestore: false
  };

  showBlock = {
    selectCity: true // add logic if city isn't in localstorage
  }

  toggleShowLogIn () {
    this.showPopup.logIn = !this.showPopup.logIn
  }

  get loggedIn () {
    return AuthModule.status.loggedIn
  }

  // @Watch('showPopup')
  // onShowChanged (newVal: any, oldVal: any) {
  //   for (var key in newVal) {
  //     if (newVal[key] === true) {
  //       document.body.s
  //       // do stuff
  //     }
  //   }
  // }

  mounted () {
    const { dispatch } = this.$store
    dispatch('auth/actualizeUser')
  }

  created () {
    eventBus.$on('toggle-registration-popup', () => {
      this.showPopup.registration = !this.showPopup.registration
    })

    eventBus.$on('toggle-log-in-popup', () => {
      this.showPopup.logIn = !this.showPopup.logIn
    })

    eventBus.$on('toggle-restore-popup', () => {
      this.showPopup.restorePassword = !this.showPopup.restorePassword
    })

    eventBus.$on('toggle-success-restore-popup', () => {
      this.showPopup.successRestore = !this.showPopup.successRestore
    })

    eventBus.$on('close-log-in-and-open-registration', () => {
      this.showPopup.logIn = false
      this.showPopup.registration = true
    })

    eventBus.$on('close-log-in-and-open-restore-password', () => {
      this.showPopup.logIn = false
      this.showPopup.restorePassword = true
    })

    eventBus.$on('close-registration-and-open-log-in', () => {
      this.showPopup.registration = false
      this.showPopup.logIn = true
    })

    eventBus.$on('close-restore-and-open-success-restore', () => {
      this.showPopup.restorePassword = false
      this.showPopup.successRestore = true
    })
  }
}
