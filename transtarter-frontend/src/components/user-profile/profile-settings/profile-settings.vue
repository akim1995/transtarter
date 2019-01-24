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
        <label
          class="col-sm-4 big-label"
        >Название компании</label>
        <div class="col-sm-6">
          <input
            type="text"
            class="form-control-lg"
            placeholder="email@example.com"
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
