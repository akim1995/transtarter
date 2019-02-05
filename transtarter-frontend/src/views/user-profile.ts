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
  get loggedIn () {
    return AuthModule.status.loggedIn
  }

  get showBlockYourCity () {
    return DisplayModule.showBlock.yourCity
  }

  mounted () {
    const { dispatch } = this.$store
    dispatch('auth/actualizeUser')
  }
}
