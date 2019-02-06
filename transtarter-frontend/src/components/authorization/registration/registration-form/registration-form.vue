<template>

  <div>
    <div class="registration-text">
      Регистрация
    </div>

    <form class="registration-form">
      <div class="form-group">
        <label class="label">Введите имя и фамилию контактного лица</label>
        <input
          v-model="regForm.fullName"
          placeholder="Имя и фамилия"
          class="form-control"
        >
      </div>

      <div class="form-group">
        <label class="label">Введите телефон</label>
        <input
          v-model="regForm.phone"
          placeholder="Телефон"
          class="form-control"
        >
      </div>

      <div class="form-group">
        <label class="label">Введите email</label>
        <input
          v-model="regForm.email"
          placeholder="Почта"
          class="form-control"
        >
      </div>

      <div class="form-group">
        <label class="label">Какую организацию вы представляете?</label>
        <select
          class="form-control"
          v-model="regForm.organizationVariants"
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
import { eventBus } from '../../../../main'
import { DisplayModule } from '../../../../store/modules/display.module'
import { store } from '../../../../store/index'

@Component
export default class RegistrationForm extends Vue {
  regForm = {
    fullName: '',
    phone: '',
    email: '',
    organizationVariants: '',
    organizationType: '',
    organizationName: ''
  };

  closeRegistrationAndOpenLogIn () {
    store.dispatch('display/closeRegistrationAndOpenLogIn')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "registration-form-styles.scss";
</style>
