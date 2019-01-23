
<template>
  <header class="header">

    <div class="header__menu">
      <div class="header__left">
        <div class="header__logo">
          Транс Стартер
        </div>
        <ul class="header__menu-list">
          <li class="header__menu-item">
            <a href="#">Акции и новинки</a>
          </li>
          <li class="header__menu-item">
            <a href="#">Доставка и оплата</a>
          </li>
          <li class="header__menu-item">
            <a
              href="#"
              class="active"
            >О компании</a>
          </li>
          <li class="header__menu-item">
            <a href="#">Найти точку ремонта</a>
          </li>
          <li class="header__menu-item">
            <a href="#">Контакты</a>
          </li>
          <li class="header__menu-item">
            <a href="#">Блог</a>
          </li>
        </ul>
      </div>

      <div class="header__right">
        <ul class="header__login">
          <li class="header__login-item header__login-item_icon-cart">
            <span class="icon-shopping-cart header__icon-cart">
              <i>9</i>
            </span>
          </li>
          <li class="header__login-item">
            <a
              class="border"
              href="#"
            >Вход</a>
          </li>
          <li class="header__login-item">
            <a
              class="border"
              href="#"
            >Регистрация</a>
          </li>
        </ul>
      </div>

    </div>

    <div class="header__search search">
      <form class="container search__form">
        <select
          class="search__select"
          name=""
        >
          <option value="detail_1">Детали 1</option>
          <option value="detail_2">Детали 2</option>
          <option value="detail_3">Детали 3</option>
          <option value="detail_4">Детали 4</option>
          <option value="detail_5">Детали 5</option>
          <option value="detail_6">Детали 6</option>
          <option value="detail_7">Детали 7</option>
        </select>

        <div class="search__input search-input">
          <i class="icon-search search-input__icon-lins"></i>
          <input
            type="search"
            name="search"
          >
          <button
            type="button"
            class="search-input__btn-clear icon-close"
          ></button>
        </div>
        <button
          type="submit"
          class="search__btn-search"
        >Найти</button>
      </form>
      <div class="container search__location">
        <div class="search__city border-bottom link">
          Москва
        </div>

        <ul class="search__street-list">
          <li class="search__street">
            <i class="icon-map-marker search__icon-marker"></i>
            <p>Каширское шоссе, 41</p>
          </li>
          <li class="search__street">
            <i class="icon-map-marker search__icon-marker"></i>
            <p>г. Дзержинский, ул. Энергетиков, 18А</p>
          </li>
        </ul>

        <span class="search__phone">
          +7 (495) 748-97-74
        </span>

      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
@import "header-styles.scss";
</style>
