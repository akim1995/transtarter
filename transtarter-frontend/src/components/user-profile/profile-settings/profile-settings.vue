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
      <button type="button" class="active">Регистрационные данные</button>
      <button type="button">Адреса доставки</button>
      <button type="button">Реквизиты и юр. лица</button>
    </div>

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
