import { Component, Vue, Watch } from 'vue-property-decorator'
import { eventBus } from '../main'
// components
import Header from '@/components/shared/header/header.vue'
import Footer from '@/components/shared/footer/footer.vue'
import SelectCity from '@/components/shared/select-city/select-city.vue'
import YourCity from '@/components/shared/your-city/your-city.vue'
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
import { DisplayModule } from '../store/modules/display.module'

@Component({
  components: {
    Header,
    Footer,
    UserSidebar,
    PersonalManager,
    ProfileSettings,
    YourCity,
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
    successRestore: false,
    requestCall: false
  };

  showBlock = {
    selectCity: false, // add logic if city isn't in localstorage
    yourCity: true // add logic if city isn't in localstorage
  }

  toggleShowLogIn () {
    this.showPopup.logIn = !this.showPopup.logIn
  }

  get loggedIn () {
    return AuthModule.status.loggedIn
  }

  get showBlockYourCity () {
    return DisplayModule.showBlockYourCity
  }

  @Watch('showPopup', { deep: true })
  onShowChanged (newVal: any) {
    const className = 'modal-open'
    const keys = Object.values(newVal)
    if (keys.some(x => x === true)) {
      document.body.classList.add(className)
    } else {
      document.body.classList.remove(className)
    }
  }

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

    eventBus.$on('toggle-request-call-popup-modal', () => {
      this.showPopup.requestCall = !this.showPopup.requestCall
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

    eventBus.$on('close-your-city', () => {
      this.showBlock.yourCity = false
    })

    eventBus.$on('close-your-city-and-open-select-city', () => {
      this.showBlock.yourCity = false
      this.showBlock.selectCity = true
    })

    eventBus.$on('select-city', (selectedCity: string) => {
      this.showBlock.selectCity = false
      // TODO process selectedCity in the future
    })
  }
}
