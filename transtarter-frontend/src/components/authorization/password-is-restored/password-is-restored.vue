<template>
  <div class="password-restored-succesfuly wrapper">

    <!-- success restore -->
    <div  class="log-in-modal modal-popup">
      <div class="close">✖</div>
      <div class="title bold">
        Мы отправили ссылку для восстановления
        на email
      </div>

      <div
        class="tip"
        style="margin-bottom: 0;"
      >
        Перейдите по ней и следуйте инструкциям на сайте.
      </div>

    </div>
    <!-- end success restore -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PasswordIsRestored extends Vue {

}
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
@import "password-restore-styles.scss";
</style>
