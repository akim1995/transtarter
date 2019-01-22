<template>
  <div class="password-restore wrapper">
    <!-- desktop and mobile version -->
    <div
      class="log-in-modal modal-popup"
      v-if="restore.beforeRestore"
    >
      <div class="close">✖</div>
      <div class="title bold">
        Восстановление пароля
      </div>

      <div class="tip">
        Введите email, указанный при регистрации, мы вышлем ссылку для восстановления пароля
      </div>

      <div class="reset-block">
        <input
          v-model="email"
          placeholder="Почта"
          class="form-control reset-input"
        >
        <button
          type="submit"
          class="btn btn-orange reset-btn"
          @click='restorePassword()'
        >
          Восстановить пароль
        </button>
      </div>
    </div>
    <!-- end of desktop and mobile version -->

    <!-- success restore -->
    <div
      class="log-in-modal modal-popup"
      v-if="restore.successRestore"
    >
      <div class="close">✖</div>
      <div class="title bold">
        Мы отправили ссылку для восстановления
        на email
      </div>

      <div class="tip" style="margin-bottom: 0;">
        Перейдите по ней и следуйте инструкциям на сайте.
      </div>

    </div>
    <!-- end success restore -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PasswordRestore extends Vue {
  email = '';
  restore = {
    beforeRestore: true,
    successRestore: null
  };

  restorePassword () {
    // here will be http response
    this.restore.beforeRestore = false
    this.restore.successRestore = true
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables.scss";
@import "password-restore-styles.scss";
</style>
