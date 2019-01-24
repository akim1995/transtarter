<template>
  <div class="user-profile">
    <Header />
    <section class="section"></section>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/shared/header/header.vue'
import Footer from '@/components/shared/footer/footer.vue'

@Component({
  components: {
    Header,
    Footer
  }
})
export default class UserProfile extends Vue {}
</script>

<style scoped lang="scss">
.user-profile {
  width: 100%;
//   height: 100%;
}

.section {
  width: 100%;
  height: 500px;
  background-color: red;
}
</style>
