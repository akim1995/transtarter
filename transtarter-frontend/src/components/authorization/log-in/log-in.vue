<template>
  <div
    class="log-in modal-wrapper"
    v-if="modalIsOpened"
  >

    <!-- desktop and mobile version -->
    <div class="modal-popup">
      <div class="modal-content log-in-content ">
        <div
          class="close"
          @click="toggleLogInPopup()"
        >✖</div>
        <div class="title bold">
          Вход на сайт
        </div>

        <form
          class="log-in-form"
          @submit.prevent='login'
        >
          <!--<div class="form-group">
            <label class="label">Email, указанный при регистрации</label>
            <input
              v-model="logInForm.email"
              placeholder="Почта"
              class="form-control"

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
              val='123'
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
          </div> -->

          <button
            type="submit"
            class="btn btn-orange btn-log-in"
          >
            <!-- Войти -->
            Войти через IdentityServer
          </button>
        </form>

        <div class="want-to-reg">
          Впервые на сайте?
          <a
            class="go-to-reg"
            @click="closeLogInAndOpenRestration()"
          >Зарегистрироваться</a>
        </div>
      </div>

    </div>
    <!-- end of desktop  and mobile  version -->

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { ClosablePopup } from '@/components/mixins/closable-popup'
import { DisplayModule } from '@/store/modules/display.module'
import { eventBus } from '@/main'
import { store } from '@/store/index'

@Component
export default class LogIn extends mixins(ClosablePopup) {
  logInForm = {
    email: '',
    password: ''
  };

  foreignPc = false;

  toggleForeignPc () {
    this.foreignPc = !this.foreignPc
  }

  toggleLogInPopup () {
    store.dispatch('display/toggleLogIn')
  }

  closeLogInAndOpenRestration () {
    store.dispatch('display/closeLogInAndOpenRegistration')
  }

  closeLogInAndOpenRestorePassword () {
    store.dispatch('display/closeLogInAndOpenRestore')
  }

  get modalIsOpened () {
    return false // DisplayModule.showPopup.logIn
  }

  login (e: Event) {
    // module is injected in header
    store.dispatch('auth/login')
    store.dispatch('display/toggleLogIn')
  }

  listenEscKeyup (e: KeyboardEvent) {
    if (e.keyCode === 27 && this.modalIsOpened) {
      store.dispatch('display/toggleLogIn')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "log-in-styles.scss";
</style>
