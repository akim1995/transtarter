<template>
  <div class="home">
    <Registration />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Registration from '@/components/registration/registration.vue' // @ is an alias to /src

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
  height: 100%;
}
</style>
