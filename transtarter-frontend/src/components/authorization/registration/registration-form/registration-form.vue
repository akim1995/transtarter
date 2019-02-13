<template>

  <div>
    <div class="registration-text">
      Регистрация
    </div>

    <form
      v-on:submit.prevent="onSubmit"
      class="registration-form"
    >
      <div class="form-group">
        <label class="label">Введите имя и фамилию контактного лица</label>
        <input
          v-model="regForm.login"
          placeholder="Имя и фамилия"
          class="form-control"
          type="text"
          required
        >
      </div>

      <div class="form-group">
        <label class="label">Введите телефон</label>
        <input
          v-model="regForm.phone"
          placeholder="Телефон"
          class="form-control"
          type="tel"
          autocomplete='new-tel'
          required
        >
      </div>

      <div class="form-group">
        <label class="label">Введите email</label>
        <input
          v-model="regForm.email"
          placeholder="Почта"
          class="form-control"
          type="email"
          autocomplete='new-email'
          required
        >
      </div>

      <div class="form-group">
        <label class="label">Введите пароль</label>
        <input
          v-model="regForm.password"
          placeholder="Пароль"
          class="form-control"
          type="password"
          required
        >
      </div>

      <div class="form-group">
        <label class="label">Какую организацию вы представляете?</label>
        <select
          class="form-control"
          v-model="regForm.organizationVariant"
          required
        >
          <option
            disabled
            value=""
          >Выберите один из вариантов</option>
          <option>Автосервис</option>
          <option>Автосервис</option>
          <option>Автосервис</option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Введите наименование организации</label>
        <div class="two-selectors">
          <select
            class="form-control first-selector"
            v-model="regForm.organizationType"
            required
          >
            <option
              disabled
              value=""
            >Выберите один из вариантов</option>
            <option>ООО</option>
            <option>ООО</option>
          </select>
          <input
            v-model="regForm.organizationName"
            placeholder="Название огранизации"
            class="form-control second-selector"
            type='text'
            required
          >
        </div>
      </div>

      <button
        type="submit"
        class="btn btn-orange btn-reg"
      >
        Зарегистрироваться
      </button>

      <div class="accept-policy">
        Нажимая на кнопку, вы даете согласие
        на обработку<br> своих персональных данных
        и соглашаетесь<br> с <a
          href="#"
          class="policy-link"
        >Политикой конфиденциальности</a>
      </div>
    </form>

    <div class="already-have-account text-center">
      <p>Уже зарегистрированы?</p>
      <span
        href="#"
        class="go-log-in"
        @click="closeRegistrationAndOpenLogIn()"
      >Войти</span>
    </div>

  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { eventBus } from '@/main'
import { DisplayModule } from '@/store/modules/display.module'
import { store } from '@/store/index'
import { AuthService } from '@/services/auth.service'

@Component
export default class RegistrationForm extends Vue {
  regForm = {
    login: 'test',
    phone: '89114264099',
    email: 'serov.m.888@gmail.com',
    password: 'CavlawOw111%',
    organizationVariant: 'Автосервис',
    organizationType: 'ООО',
    organizationName: 'kek'
  };

  auth = new AuthService();

  closeRegistrationAndOpenLogIn () {
    store.dispatch('display/closeRegistrationAndOpenLogIn')
  }

  onSubmit (e: Event) {
    this.auth
      .registration(this.regForm)
      .then(res => {
        // eslint-disable-next-line
        console.log('User is created:', res)
        store.dispatch('display/closeRegistrationAndOpenLogIn')
      })
      .catch(err => {
        // eslint-disable-next-line
        console.error(err)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "registration-form-styles.scss";
</style>
