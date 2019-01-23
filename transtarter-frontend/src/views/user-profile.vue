<template>
  <div class="user-profile">
    <Header />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/shared/header/header.vue'

@Component({
  components: {
    Header
  }
})
export default class UserProfile extends Vue {}
</script>

<style scoped lang="scss">
.user-profile {
  width: 100vw;
//   height: 100%;
}
</style>
