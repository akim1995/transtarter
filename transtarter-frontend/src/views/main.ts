import { Component, Vue, Watch } from 'vue-property-decorator'
import { eventBus } from '../main'
// components
import Header from '@/components/shared/header/header.vue'
import Footer from '@/components/shared/footer/footer.vue'
import UserProfileWrapper from '@/components/user-profile/user-profile-wrapper/user-profile-wrapper.vue'
import SelectCity from '@/components/shared/select-city/select-city.vue'
import YourCity from '@/components/shared/your-city/your-city.vue'
// import UserSidebar from '@/components/user-profile/user-sidebar/user-sidebar.vue'
// import PersonalManager from '@/components/user-profile/personal-manager/personal-manager.vue'
// import ProfileSettings from '@/components/user-profile/profile-settings/profile-settings.vue'
// popups
import Registration from '@/components/authorization/registration/registration.vue'
// import LogIn from '@/components/authorization/log-in/log-in.vue'
import PasswordRestore from '@/components/authorization/password-restore/password-restore.vue'
import PasswordSuccessRestore from '@/components/authorization/password-success-restore/password-success-restore.vue'
import RequestCall from '@/components/shared/request-call/request-call.vue'
import UnsupportedBrowser from '@/components/shared/unsupport-browser/unsupported-browser.vue'
// store modules
import { AuthModule } from '../store/modules/authentication.module'
import { DisplayModule } from '../store/modules/display.module'

@Component({
  components: {
    Header,
    Footer,
    UserProfileWrapper,
    // UserSidebar,
    // PersonalManager,
    // ProfileSettings,
    YourCity,
    SelectCity,
    // popups
    Registration,
    // LogIn,
    PasswordRestore,
    PasswordSuccessRestore,
    RequestCall,
    UnsupportedBrowser
  }
})
export default class UserProfile extends Vue {

}
