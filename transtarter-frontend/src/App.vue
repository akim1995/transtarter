<template>
  <div id="app">
    <router-view />
    <!-- <UserProfile /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import UserProfile from '@/views/user-profile.vue'

@Component({
  components: {
    UserProfile
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
