<template>
  <div>
    <!-- main sections -->
    <Header />

    <!-- <div style="background-color: #0CB520; color: white; text-align: center
    margin-bottom: 10px; font-family: 'Exo 2'; font-size: 24px;
    ">
      <div style="padding: 10px; font-size: 24px;">Найдите запчасть или агрегат</div>
<ts-ui-find-detail></ts-ui-find-detail>
    </div> -->
    <UserProfileWrapper />
    <Footer />
    <!-- end main sections -->

    <!-- popups -->
    <!-- <LogIn /> -->
    <RequestCall />
    <Registration />
    <PasswordRestore />
    <PasswordSuccessRestore />
    <!-- <UnsupportedBrowser /> -->
    <!-- end popups -->

    <!-- blocks  -->
    <YourCity />
    <SelectCity />
    <!-- end blocks  -->

  </div>
</template>

<script lang="ts" src="./main.ts"></script>

<style scoped lang="scss">
</style>
