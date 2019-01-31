
<template>
  <header class="header">

    <!-- desktop markup -->
    <div class="desktop-header">
      <div class="desktop-header__menu">
        <div class="desktop-header__left">
          <div class="desktop-header__logo">
            Транс Стартер
          </div>
          <ul class="desktop-header__menu-list">
            <li class="desktop-header__menu-item">
              <a href="#">Акции и новинки</a>
            </li>
            <li class="desktop-header__menu-item">
              <a href="#">Доставка и оплата</a>
            </li>
            <li class="desktop-header__menu-item">
              <a
                href="#"
                class="active"
              >О компании</a>
            </li>
            <li class="desktop-header__menu-item">
              <a href="#">Найти точку ремонта</a>
            </li>
            <li class="desktop-header__menu-item">
              <a href="#">Контакты</a>
            </li>
            <li class="desktop-header__menu-item">
              <a href="#">Блог</a>
            </li>
          </ul>
        </div>

        <div class="desktop-header__right">
          <ul class="desktop-header__login">
            <li class="desktop-header__login-item desktop-header__login-item_icon-cart">
              <span class="icon-shopping-cart desktop-header__icon-cart">
                <i>9</i>
              </span>
              <font-awesome-icon icon="shopping-cart" />
            </li>
            <!-- block for guests -->
            <li
              class="desktop-header__login-item"
              @click="toggleLogInPopup()"
              v-if="!loggedIn"
            >
              <a
                class="border"
              >Вход</a>
            </li>
            <li
              class="desktop-header__login-item"
              @click='toggleRegistrationPopup()'
              v-if="!loggedIn"
            >
              <a
                class="border"
              >Регистрация</a>
            </li>
            <!-- end for guests -->
            <!-- block for users -->
            <div
              class="user-info"
              v-if="loggedIn"
              @click="toggleUserMenu()"
            >
              <div class="user-avatar"></div>
              <div class="user-name">Егор Воронов</div>
            </div>
            <!-- end block for users -->
          </ul>
        </div>

      </div>

      <div
        class="menu-popup"
        v-if="blocksShow.user && loggedIn"
      >
        <div class="user-fullname">
          ИП Воронов Е.В.
        </div>
        <div
          class="agreement"
          style=""
        >
          Договор № 123765
        </div>
        <div class="price-info">
          Оптовые цены (активны)
        </div>
        <div class="wallet">
          <div class="wallet-with-icon">
              <div class="icon"></div>

            <div class="wallet-balance">
              15 000 ₽
            </div>
          </div>
        </div>

        <ul class="menu-popup_list">
          <li class="menu-popup_list-item">
            Личный кабинет
          </li>
          <li class="menu-popup_list-item">
            Профиль и настройки
          </li>
          <li class="menu-popup_list-item menu-popup_list-item-active">
            Корзина
            <span class="menu-popup_list-item-notify">3</span>
          </li>
          <li class="menu-popup_list-item">
            Заказы и оплаты
          </li>
          <li
            class="menu-popup_list-item"
            @click="logout"
          >
            Выйти
          </li>
        </ul>

      </div>

      <div class="desktop-header__search search">
        <form class="container search__form">
          <span class="search__form__select-numbers">
            123
          </span>
          <select
            class="search__select"
            name=""
          >
            <option
              disabled
              value=""
              selected
            >Номер детали</option>
            <option value="detail_1">Детали 1</option>
            <option value="detail_2">Детали 2</option>
            <option value="detail_3">Детали 3</option>
            <option value="detail_4">Детали 4</option>
            <option value="detail_5">Детали 5</option>
            <option value="detail_6">Детали 6</option>
            <option value="detail_7">Детали 7</option>
          </select>

          <div class="search__input search-input">
            <font-awesome-icon
              icon="search"
              class="search__icon-lins"
            />
            <input type="text">
            <font-awesome-icon
              icon="times"
              class="search__clear"
            />
          </div>
          <button
            type="submit"
            class="search__btn-search"
          >Найти</button>
        </form>
        <div class="container search__location">
          <div class="search__location-left">
            <div class="search__city border-white link">
              Москва
            </div>

            <ul class="search__street-list">
              <li class="search__street">
                <font-awesome-icon
                  icon="map-marker-alt"
                  class="search__icon-marker"
                />
                <p>Каширское шоссе, 41</p>
              </li>
              <li class="search__street">
                <font-awesome-icon
                  icon="map-marker-alt"
                  class="search__icon-marker"
                />
                <p>г. Дзержинский, ул. Энергетиков, 18А</p>
              </li>
            </ul>
          </div>

          <div class="search__location-right">
            <a
              class="search__phone border-white"
              href="tel:+7-495-748-97-74"
            >
              +7 (495) 748-97-74
            </a>
          </div>

        </div>
      </div>
    </div>
    <!-- end desktop markup -->

    <!-- mobile makrup -->
    <div class="mobile-header">
      <div class="mobile-header__menu">
        <div class="mobile-header__menu__left">
          <div class="burger-wrapper">
            <a
              class="burger-icon"
              @click="toggleMainMenu()"
            >
              <font-awesome-icon icon='bars' />
            </a>
          </div>
          <div class="logo">
            Транс<br> Стартер
          </div>
        </div>

        <div class="mobile-header__menu__right">
          <div class="menu-item">
            <font-awesome-icon icon="map-marker-alt" />
          </div>

          <div class="menu-item">
            <font-awesome-icon icon="shopping-cart" />
            <span class="notify-counter">9</span>
          </div>

          <div class="menu-item">
            <!-- block for guests -->
            <div
              class="mobile-header__login-item"
              @click="toggleUserMenu()"
              v-if="!loggedIn"
            >
              <font-awesome-icon icon="user" />
            </div>
            <!-- end for guests -->
            <!-- block for users -->
            <div
              class="user-avatar"
              v-if="loggedIn"
              @click="toggleUserMenu()"
            >
            </div>
          </div>

        </div>

      </div>

      <div
        class="menu-popup"
        v-if="blocksShow.menu"
      >
        <ul class="menu-popup_list">
          <li class="menu-popup_list-item">
            <a href="#">Акции и новинки</a>
          </li>
          <li class="menu-popup_list-item">
            <a href="#">Доставка и оплата</a>
          </li>
          <li class="menu-popup_list-item">
            <a
              href="#"
              class="active"
            >О компании</a>
          </li>
          <li class="menu-popup_list-item">
            <a href="#">Найти точку ремонта</a>
          </li>
          <li class="menu-popup_list-item">
            <a href="#">Контакты</a>
          </li>
          <li class="menu-popup_list-item">
            <a href="#">Блог</a>
          </li>
        </ul>
      </div>
      <div
        class="menu-popup"
        v-if="blocksShow.location"
      >
        <div class="container search__location">
          <div class="search__location-left">
            <div class="search__city border-white link">
              Москва
            </div>

            <ul class="search__street-list">
              <li class="search__street">
                <font-awesome-icon
                  icon="map-marker-alt"
                  class="search__icon-marker"
                />
                <p>Каширское шоссе, 41</p>
              </li>
              <li class="search__street">
                <font-awesome-icon
                  icon="map-marker-alt"
                  class="search__icon-marker"
                />
                <p>г. Дзержинский, ул. Энергетиков, 18А</p>
              </li>
            </ul>
          </div>

          <div class="search__location-right">
            <a
              class="search__phone border-white"
              href="tel:+7-495-748-97-74"
            >
              +7 (495) 748-97-74
            </a>
          </div>

        </div>
      </div>
      <div
        class="menu-popup"
        v-if="blocksShow.user && !loggedIn"
      >
        <ul class="menu-popup_list">
          <li
            class="menu-popup_list-item"
            @click="toggleLogInPopup()"
          >
            <a >Вход</a>
          </li>
          <li
            class="menu-popup_list-item"
            @click="toggleRegistrationPopup()"
          >
            <a >Регистрация</a>
          </li>
        </ul>
      </div>
      <div
        class="menu-popup"
        v-if="blocksShow.user && loggedIn"
      >
        <div class="user-fullname">
          ИП Воронов Е.В.
        </div>
        <div
          class="agreement"
          style=""
        >
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

        <ul class="menu-popup_list">
          <li class="menu-popup_list-item">
            Личный кабинет
          </li>
          <li class="menu-popup_list-item">
            Профиль и настройки
          </li>
          <li class="menu-popup_list-item menu-popup_list-item-active">
            Корзина
            <span class="menu-popup_list-item-notify">3</span>
          </li>
          <li class="menu-popup_list-item">
            Заказы и оплаты
          </li>
          <li
            class="menu-popup_list-item"
            @click="logout"
          >
            Выйти
          </li>
        </ul>

      </div>

      <div class="mobile-header__search">
        <form class="search__form">
          <div class="form-row">
            <span class="search__select-numbers ">
              123
            </span>
            <select
              class="search__select"
              name=""
            >
              <option
                disabled
                value=""
                selected
              >Номер детали</option>
              <option value="detail_1">Детали 1</option>
              <option value="detail_2">Детали 2</option>
              <option value="detail_3">Детали 3</option>
              <option value="detail_4">Детали 4</option>
              <option value="detail_5">Детали 5</option>
              <option value="detail_6">Детали 6</option>
              <option value="detail_7">Детали 7</option>
            </select>
          </div>

          <div class="form-row">
            <div class="search__input-mobile search-input">
              <input type="text">
              <font-awesome-icon
                icon="times"
                class="search__clear"
              />
            </div>
            <button
              type="submit"
              class="search__btn-search"
            >
              <font-awesome-icon
                icon="search"
                class="search__icon-lins"
              />
            </button>
          </div>

        </form>

      </div>
    </div>
    <!-- end mobile makrup -->

  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { eventBus } from '../../../main'
import { AuthModule } from '../../../store/modules/authentication.module'
import AuthService from '@/services/auth.service'

@Component
export default class Header extends Vue {
  blocksShow = {
    menu: false,
    location: false,
    user: false
  };

  auth = new AuthService();

  toggleRegistrationPopup () {
    eventBus.$emit('toggle-registration-popup')
  }

  toggleLogInPopup () {
    eventBus.$emit('toggle-log-in-popup')
  }

  get loggedIn () {
    return AuthModule.loggedIn
  }

  logout () {
    // e.preventDefault()
    this.auth.logout()
    // this.$store.dispatch('auth/logout')
  }

  toggleMainMenu () {
    this.blocksShow.menu = !this.blocksShow.menu
  }

  toggleUserMenu () {
    this.blocksShow.user = !this.blocksShow.user
  }
}
</script>

<style scoped lang="scss">
@import "./header-styles.scss";
@import "./header-mobile-styles.scss";
@import "./search-form-styles.scss";
@import "./search-form-mobile-styles.scss";
</style>
