<template>
  <div class="home">
    <!-- <Registration /> -->
    <!-- <LogIn /> -->
    <PasswordRestore />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LogIn from '@/components/authorization/log-in/log-in.vue' // @ is an alias to /src
import Registration from '@/components/authorization/registration/registration.vue' // @ is an alias to /src
import PasswordRestore from '@/components/authorization/password-restore/password-restore.vue' // @ is an alias to /src

@Component({
  components: {
    Registration,
    LogIn,
    PasswordRestore
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.home {
  width: 100vw;
  height: 100%;
}
</style>
