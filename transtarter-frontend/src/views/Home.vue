<template>
  <div class="home">
    <Registration msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Registration from '@/components/registration/Registration.vue' // @ is an alias to /src

@Component({
  components: {
    Registration
  }
})
export default class Home extends Vue {}

</script>

<style scoped lang="scss">

.home {
  width: 100vw;
  height: 100vh;
}
</style>
