<template>
  <div class="user-sidebar">
    <div class="user-sidebar-top">
      <div class="user-picture"></div>
      <div class="user-fullname">
        ИП Воронов Е.В.
      </div>
      <div class="agreement">
        Договор № 123765
      </div>
      <div class="price-info">
        Оптовые цены (активны)
      </div>
      <div class="wallet">
        <div class="wallet-with-icon">
          <span class="icon"></span>
          <div class="wallet-balance">
            15 000 ₽
          </div>
        </div>
      </div>
    </div>
    <div class="user-sidebar-bottom">
      <ul class="lk-links">
        <li class="lk-link">
          Личный кабинет
        </li>
        <li class="lk-link lk-link-active">
          Профиль и настройки
        </li>
        <li class="lk-link">
          Корзина
          <span class="lk-link-notify">3</span>
        </li>
        <li class="lk-link">
          Заказы и оплаты
        </li>
        <li class="lk-link">
          Выйти
        </li>
      </ul>
      <div class="lk-links-alternative">
        <select
          class="form-control form-control-border-radius"
        >
          <option
            disabled
            value=""
          >Выберите один из вариантов</option>
          <option>Личный кабинет</option>
          <option>Профиль и настройки</option>
          <option>Корзина</option>
          <option>Заказы и оплаты</option>
          <option>Выйти</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class UserSidebar extends Vue {}
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
@import "./user-sidebar-styles.scss";
</style>
