<template>
  <div class="password-restore wrapper">
    <!-- desktop and mobile version -->
    <div class="log-in-modal modal-popup">
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
        >
          Восстановить пароль
        </button>
      </div>
    </div>
    <!-- end of desktop and mobile version -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PasswordRestore extends Vue {
  email = '';
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables.scss";
@import "password-restore-styles.scss";
</style>
