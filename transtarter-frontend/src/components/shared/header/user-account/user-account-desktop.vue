
<template>
  <ul class="desktop-header__login">
    <li class="desktop-header__login-item desktop-header__login-item_icon-cart">
      <span class="icon-shopping-cart desktop-header__icon-cart">
        <i>9</i>
      </span>
      <div class="shopping-cart"></div>
    </li>
    <!-- block for guests -->
    <li
      class="desktop-header__login-item"
      @click="logIn()"
      v-if="!loggedIn"
    >
      <a class="border">Вход</a>
    </li>
    <li
      class="desktop-header__login-item"
      @click='toggleRegistrationPopup()'
      v-if="!loggedIn"
    >
      <a class="border register">Регистрация</a>
    </li>
    <!-- end for guests -->
    <!-- block for users -->
    <div
      class="user-info"
      v-if="loggedIn"
      @click="toggleUserMenu()"
    >
      <div class="user-avatar"></div>
      <div class="user-name border-white">{{userName}}</div>
    </div>
    <!-- end block for users -->
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { AuthModule } from '@/store/modules/authentication.module'
import { store } from '@/store/index'

@Component
export default class UserAccountDesktop extends Vue {
  get loggedIn () {
    return AuthModule.logged
  }

  get userName () {
    return AuthModule.name.length > 10
      ? AuthModule.name.substring(0, 10) + '...'
      : AuthModule.name
  }

  logIn () {
    store.dispatch('auth/login')
  }

  toggleRegistrationPopup () {
    store.dispatch('display/toggleRegistration')
  }

  toggleUserMenu () {
    setTimeout(() => {
      store.dispatch('display/toggleBlockShowUser')
    })
  }
}
</script>

<style lang="scss">
</style>
