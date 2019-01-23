<template>
  <div class="password-restore wrapper">
    <!-- desktop and mobile version -->
    <div
      class="log-in-modal modal-popup"
      v-if="restore.dataState === 'notAsked'"
    >
      <div class="close">✖</div>
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

    <!-- success restore -->
    <div
      class="log-in-modal modal-popup"
      v-if="restore.dataState === 'loaded'"
    >
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
export default class PasswordRestore extends Vue {
  email = '';
  restoreStates = {
    notAsked: 'notAsked',
    loading: 'loading',
    loaded: 'loaded',
    failed: 'failed'
  };
  restore = {
    dataState: this.restoreStates.notAsked,
    errorText: '',
    data: []
  };
  get isLoading (): boolean {
    return this.restore.dataState === this.restoreStates.loading
  }

  get isLoaded (): boolean {
    return this.restore.dataState === this.restoreStates.loaded
  }

  get isError (): boolean {
    return this.restore.dataState === this.restoreStates.failed
  }

  restorePassword (e: Event) {
    e.preventDefault()
    this.restore.dataState = this.restoreStates.loading

    setTimeout(() => {
      this.restore.dataState = this.restoreStates.loaded
    }, 1000)
  }
}
</script>

<style scoped lang="scss">
@import "../../../assets/scss/variables.scss";
@import "password-restore-styles.scss";
</style>
