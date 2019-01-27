<template>
  <div class="user-profile">
    <Header />

    <main class="content">
      <div
        class="content-wrapper container"
        v-if="loggedIn"
      >

        <aside class="aside-content">
          <UserSidebar style="margin-bottom: 24px;" />
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
    <Registration v-if="show.registration" />
    <LogIn v-if="show.logIn" />
    <PasswordRestore v-if="show.restorePassword" />
    <PasswordSuccessRestore v-if="show.successRestore" />

  </div>
</template>

<script lang="ts" src="./user-profile.ts"></script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
@import "./user-profile-styles.scss";

</style>
