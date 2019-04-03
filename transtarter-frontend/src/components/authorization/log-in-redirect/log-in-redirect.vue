<template>
  <div>
      Происходит редирект на Transtarter Identity Server
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { store } from '@/store/index'

@Component
export default class LogIn extends Vue {
  mounted () {
    store.dispatch('auth/login')
  }
}
</script>
