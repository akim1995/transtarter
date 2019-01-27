<template>
  <div class="profile-settings">
    <div class="title">
      Профиль и настройки
    </div>

    <div
      class="btn-group btn-group-column"
      role="group"
      aria-label="Basic example"
    >
      <button
        type="button"
        class="active"
      >Регистрационные данные</button>
      <button type="button">Адреса доставки</button>
      <button type="button">Реквизиты и юр. лица</button>
    </div>

    <div class="change-avatar">
      <div class="user-picture"></div>
      <div class="change-user-picture">
        Изменить
      </div>
    </div>

    <form>
      <div class="form-group row">
        <label class="col-sm-4 big-label">Название компании</label>
        <div class="col-sm-6">
          <input
            type="text"
            class="form-control-lg"
            placeholder="ИП Воронов И.Е"
          >
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-4 big-label">Контактное лицо</label>
        <div class="col-sm-6">
          <input
            type="text"
            class="form-control-lg"
            placeholder="Егор Воронов"
          >
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-4 big-label">Телефон</label>
        <div class="col-sm-6">
          <input
            type="text"
            class="form-control-lg"
            placeholder="+7 (900) 111-11-11
"
          >
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-4 big-label">Email</label>
        <div class="col-sm-6">
          <input
            type="text"
            class="form-control-lg"
            placeholder="voronov@gmail.com"
          >
        </div>
      </div>
      <div
        class="form-group row"
        style="margin-top: 53px;"
      >
        <label class="col-sm-4 big-label">Пароль</label>
        <label class="col-sm-6 green-link">Сменить пароль</label>
      </div>
      <div
        class="form-group row"
        style="margin-top: 53px;"
      >
        <label class="col-sm-4"></label>
        <div class="col-sm-6">
          <button
            type="submit"
            class="btn btn-orange"
          >
            Восстановить пароль
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-6 accept-checkbox">
          Нажимая на кнопку, вы даете согласие
          на обработку<br> своих персональных данных
          и соглашаетесь<br> с <a
            href="#"
            class="policy-link"
          >Политикой конфиденциальности</a>
        </div>
      </div>

    </form>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ProfileSettings extends Vue {}
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
@import "./profile-settings-styles.scss";
</style>
