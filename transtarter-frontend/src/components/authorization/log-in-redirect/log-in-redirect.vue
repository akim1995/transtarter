<template>
  <div>
      Происходит редирект на Transtarter Identity Server
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { store } from '@/store/index'
import cookieStorage from 'cookie-storage-v2';

@Component
export default class LogInRedirect extends Vue {
  mounted () {
    cookieStorage.setItem('shop-redirect', JSON.stringify(true))
    store.dispatch('auth/login')
  }
}
</script>
