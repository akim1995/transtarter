<template>
  <div class="user-profile">
    <Header/>

    <main class="content">
      <div class="content-wrapper container">
        <aside class="aside-content">
          <UserSidebar style="margin-bottom: 24px;" />
          <PersonalManager />
        </aside>

        <section class="main-content">
          <ProfileSettings />
        </section>
      </div>
    </main>

    <Footer />

    <!-- popups -->
    <Registration v-if="show.registration" />
    <LogIn  v-if="show.logIn"/>
    <PasswordRestore v-if="show.restorePassword"/>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/shared/header/header.vue'
import Footer from '@/components/shared/footer/footer.vue'
import UserSidebar from '@/components/user-profile/user-sidebar/user-sidebar.vue'
import PersonalManager from '@/components/user-profile/personal-manager/personal-manager.vue'
import ProfileSettings from '@/components/user-profile/profile-settings/profile-settings.vue'

import Registration from '@/components/authorization/registration/registration.vue'
import LogIn from '@/components/authorization/log-in/log-in.vue'
import PasswordRestore from '@/components/authorization/password-restore/password-restore.vue'

import { eventBus } from '../main'

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
    PasswordRestore
  }
})
export default class UserProfile extends Vue {
  show = {
    registration: false,
    logIn: false,
    restorePassword: false
  };

  closeAllPopups () {
    this.show.registration = false
    this.show.logIn = false
    this.show.restorePassword = false
  }

  // toggleShowRegistration () {

  // }

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
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.user-profile {
  width: 100%;
  background: #000;
  .content {
    width: 100%;
    min-height: 500px;
    background-color: $bkground-main;
    .content-wrapper {
      display: flex;
      align-items: flex-start;
      padding: 24px 0;
      .aside-content {
        width: calc(100% - 74.3% - 26px);
        margin-right: 26px;
        display: flex;
        flex-direction: column;
      }
      .main-content {
        width: 74.3%;
      }
    }
  }
}
</style>
