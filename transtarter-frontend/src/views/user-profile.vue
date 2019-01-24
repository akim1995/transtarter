<template>
  <div class="user-profile">
    <Header />

    <main class="content">
      <div class="content-wrapper container">
        <aside class="aside-content">
          <UserSidebar />
        </aside>

        <section class="main-content">
asdsad
        </section>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/shared/header/header.vue'
import Footer from '@/components/shared/footer/footer.vue'
import UserSidebar from '@/components/user-profile/user-sidebar/user-sidebar.vue'

@Component({
  components: {
    Header,
    Footer,
    UserSidebar
  }
})
export default class UserProfile extends Vue {}
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.user-profile {
  width: 100%;
  background: #000;
  .content {
    width: 100%;
    min-height: 500px;
    background-color: $bkground-main;
    .content-wrapper {
      display: flex;
      align-items: flex-start;
      padding-top: 24px;
      .aside-content {
        width: calc(100% - 74.3% - 26px);
        margin-right: 26px;
      }
      .main-content {
        width: 74.3%;
      }
    }
  }
}
</style>
