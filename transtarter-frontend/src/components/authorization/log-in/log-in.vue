<template>
  <div class="log-in wrapper">

    <!-- desktop and mobile version -->
    <div class="log-in-modal modal-popup">
      <div class="close" @click="toggleLogInPopup()">✖</div>
      <div class="title bold">
        Вход на сайт
      </div>

      <form class="log-in-form">
        <div class="form-group">
          <label class="label">Email, указанный при регистрации</label>
          <input
            v-model="logInForm.email"
            placeholder="Имя и фамилия"
            class="form-control"
            type="email"
          >
        </div>

        <div
          class="form-group"
          style="margin-bottom: 8px;"
        >
          <label class="label">Пароль</label>
          <input
            v-model="logInForm.password"
            placeholder="Телефон"
            class="form-control"
            type="password"
          >
        </div>

        <div class="remember-password">
          <a
            href="#"
            class="remember-password-text"
            @click="closeLogInAndOpenRestorePassword()"
          >
            Напомнить пароль?
          </a>
        </div>

        <div class="foreign-pc custom-checkbox">

          <span
            class="custom-checkbox-input fill-checkbox"
            @click="toggleForeignPc"
          >
            <input
              type="radio"
              class="fill-control-input"
              :checked='foreignPc'
            >
            <span class="fill-control-indicator"></span>
          </span>
          <label class="custom-checkbox-label">Чужой компьютер</label>
        </div>

        <button
          type="submit"
          class="btn btn-orange btn-log-in"
          @click="login"
        >
          Войти
        </button>
      </form>

      <div class="want-to-reg">
        Впервые на сайте?
        <a class="go-to-reg" @click="closeLogInAndOpenRestration()">Зарегистрироваться</a>
      </div>
    </div>
    <!-- end of desktop  and mobile  version -->

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { eventBus } from '../../../main'

@Component
export default class LogIn extends Vue {
  logInForm = {
    email: '',
    password: ''
  };

  foreignPc = false;

  toggleForeignPc () {
    this.foreignPc = !this.foreignPc
  }

  toggleLogInPopup () {
    eventBus.$emit('toggle-log-in-popup')
  }

  closeLogInAndOpenRestration () {
    eventBus.$emit('close-log-in-and-open-registration')
  }

  closeLogInAndOpenRestorePassword () {
    eventBus.$emit('close-log-in-and-open-restore-password')
  }

  login () {
    debugger
    this.$emit('login')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
@import "log-in-styles.scss";
</style>
