<template>
  <div class="user-profile">
    <Header />

    <main class="content">
      <div
        class="content-wrapper container"
        v-if="loggedIn"
      >

        <aside class="aside-content">
          <UserSidebar />
          <PersonalManager />
        </aside>

        <section class="main-content">
          <ProfileSettings />
        </section>
      </div>
      <div class="mock" v-if="!loggedIn">
        <div >CONTENT</div>
      </div>
    </main>

    <Footer />

    <!-- popups -->
    <Registration v-if="showPopup.registration" />
    <LogIn v-if="showPopup.logIn" />
    <PasswordRestore v-if="showPopup.restorePassword" />
    <PasswordSuccessRestore v-if="showPopup.successRestore" />
    <YourCity v-if="showBlock.yourCity"/>
    <SelectCity v-if="showBlock.selectCity"/>
    <RequestCall v-if="showPopup.requestCall"/>
  </div>
</template>

<script lang="ts" src="./user-profile.ts"></script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
@import "./user-profile-styles.scss";

</style>
