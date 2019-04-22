<template>
  <div>
      Происходит редирект на Transtarter Identity Server
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { store } from '@/store/index'
import { CookieStorage } from 'cookie-storage';

@Component
export default class LogInRedirect extends Vue {
private cookieStorage = new CookieStorage()

  mounted () {
    this.cookieStorage.setItem('shop-redirect', JSON.stringify(true))
    store.dispatch('auth/login')
  }
}
</script>
