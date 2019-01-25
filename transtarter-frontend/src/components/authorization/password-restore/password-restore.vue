<template>
  <div class="password-restore wrapper">
    <!-- desktop and mobile version -->
    <div
      class="restore-modal modal-popup"
    >
      <div class="close" @click="toggleRestorePopup()">✖</div>
      <div class="title bold">
        Восстановление пароля
      </div>

      <div class="tip">
        Введите email, указанный при регистрации, мы вышлем ссылку для восстановления пароля
      </div>

      <div class="reset-block">
        <form class="reset-form" @submit="restorePassword">
          <input
            v-model="email"
            placeholder="Почта"
            class="form-control reset-input"
            type='email'
            required
          >
          <button
            type="submit"
            class="btn btn-orange reset-btn"
          >
            Восстановить пароль
          </button>
        </form>

      </div>
    </div>
    <!-- end of desktop and mobile version -->

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { eventBus } from '../../../main'

@Component
export default class PasswordRestore extends Vue {
  email = '';

  restorePassword (e: Event) {
    e.preventDefault()
    eventBus.$emit('close-restore-and-open-success-restore')
  }

  toggleRestorePopup () {
    eventBus.$emit('toggle-restore-popup')
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
@import "password-restore-styles.scss";
</style>
