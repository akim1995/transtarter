<template>
  <div class="profile-settings">
    <div class="title">
      Профиль и настройки
    </div>

    <div
      class="btn-group"
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
