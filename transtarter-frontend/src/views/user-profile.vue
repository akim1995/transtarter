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
      <div
        class="mock"
        v-if="!loggedIn"
      >
        <div>CONTENT</div>
      </div>
    </main>

    <Footer />

    <LogIn />
    <YourCity />
    <SelectCity />
    <RequestCall />
    <PasswordRestore />
    <PasswordSuccessRestore  />
    <Registration />

  </div>
</template>

<script lang="ts" src="./user-profile.ts"></script>

<style scoped lang="scss">
@import "./user-profile-styles.scss";
</style>
