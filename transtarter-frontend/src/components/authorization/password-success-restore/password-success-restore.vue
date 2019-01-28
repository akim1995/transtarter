<template>
  <div class="success-restore modal-wrapper">

    <!-- success restore -->
    <div class=" modal-popup">
      <div class="modal-content success-restore-content">
        <div
          class="close"
          @click="toggleSuccessRestorePopup()"
        >✖</div>
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
    </div>
    <!-- end success restore -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { eventBus } from '../../../main'

@Component
export default class PasswordSuccessRestore extends Vue {
  toggleSuccessRestorePopup () {
    eventBus.$emit('toggle-success-restore-popup')
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
@import "password-success-restore";
</style>
