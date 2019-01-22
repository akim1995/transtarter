<template>
  <div class="home">
    <!-- <Registration /> -->
    <LogIn />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Registration from '@/components/registration/registration.vue' // @ is an alias to /src
import LogIn from '@/components/log-in/log-in.vue' // @ is an alias to /src

@Component({
  components: {
    Registration,
    LogIn
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
