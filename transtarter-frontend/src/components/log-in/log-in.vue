<template>
  <div class="log-in">

    <!-- desktop and mobile version -->
    <div class="log-in-modal modal-popup">
      <div class="close">✖</div>
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
          >
            Напомнить пароль?
          </a>
        </div>

        <div class="foreign-pc">
          <div class="form-check">
            <input
              type="checkbox"
              class="custom-control-input form-check-input"
            >
            <label class="custom-control-label form-check-label">Чужой компьютер</label>
          </div>
        </div>
      </form>

    </div>
    <!-- end of desktop  and mobile  version -->

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LogIn extends Vue {
  logInForm = {
    email: '',
    password: ''
  };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/variables.scss";
@import "log-in-styles.scss";
</style>
