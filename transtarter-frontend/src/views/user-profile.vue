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
    <LogIn  v-if="show.logIn" @login="login"/>
    <PasswordRestore v-if="show.restorePassword"/>
    <PasswordSuccessRestore v-if="show.successRestore"/>

  </div>
</template>

<script lang="ts" src="./user-profile.ts"></script>

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
