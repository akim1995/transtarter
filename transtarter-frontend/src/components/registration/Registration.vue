<template>
  <div class="registration">
    <!-- desktop version -->
    <div class="desktop-version-block">
      <div class="desktop-version-block-left-side">
        <div class="registration-text bold">
          Регистрация
        </div>
        <form
          class="registration-form"
          style="padding-right: 30%;"
        >
          <div class="form-group">
            <label class="label">Введите имя и фамилию контактного лица</label>
            <input
              v-model="fullName"
              placeholder="Имя и фамилия"
              class="form-control"
            >
          </div>
          <div class="form-group">
            <label class="label">Введите телефон</label>
            <input
              v-model="phone"
              placeholder="Телефон"
              class="form-control"
            >
          </div>
          <div class="form-group">
            <label class="label">Введите email</label>
            <input
              v-model="email"
              placeholder="Почта"
              class="form-control"
            >
          </div>
          <div class="form-group">
            <label class="label">Какую организацию вы представляете?</label>
            <select class="form-control">
              <option>Автосервис</option>
              <option>Автосервис</option>
              <option>Автосервис</option>
            </select>
          </div>
          <div class="form-group">
            <label class="label">Введите наименование организации</label>
            <div class="two-selectors">

              <select class="form-control first-selector">
                <option>ООО</option>
                <option>ООО</option>
                <option>ООО</option>
              </select>
              <input
                v-model="orgName"
                placeholder="Название огранизации"
                class="form-control second-selector"
              >
            </div>
          </div>

          <button
            type="submit"
            class="btn btn-orange"
            style="margin: 24px 0 8px 0; width: 201px;"
          >
            Зарегистрироваться
          </button>

          <div class="accept-checkbox">
            Нажимая на кнопку, вы даете согласие на обработку <br>
            своих персональных данных и соглашаетесь <br>
            с <a
              href="#"
              class="policy-link"
            >Политикой конфиденциальности</a>
          </div>

        </form>

        <div class="already-have-account">
          <p>Уже зарегистрированы?&nbsp;</p>
          <a
            href="#"
            class="go-log-in"
          >Войти</a>
        </div>
      </div>
      <div class="desktop-version-block-right-side">
        <div class="our-advantages">
          <div class="title bold">
            Зарегистрируйтесь
            в нашем магазине, чтобы
          </div>
          <ul class="advantages-list">
            <li class="advantage-item">
              <div class="icon">
                <div class="advantage-item-icon sales"></div>
              </div>
              <span class="advantage-item-text">Получить сообщения
                о закрытых распродажах только для наших партнеров</span>
            </li>
            <li class="advantage-item ">
              <div class="icon">
                <div class="advantage-item-icon management"></div>
              </div>
              <span class="advantage-item-text">Управлять своими заказами в личном кабинете: следить
                за статусом оплаты
                и доставки, хранить историю заказов</span>
            </li>
            <li class="advantage-item ">
              <div class="icon">
                <div class="advantage-item-icon access"></div>
              </div>
              <span class="advantage-item-text"> Получить доступ
                к индивидуальным
                оптовым ценам</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- mobile version -->
    <div class="mobile-version-block">

      <carousel
        perPage='1'
        class="mobile-version-block-carousel"
      >
        <slide class="mobile-version-block-header">
          <div class="reg-in-our-shop bold text-center">
            Зарегистрируйтесь <br>
            в нашем магазине, чтобы
          </div>
          <div class="rows-and-gear-icon"></div>
          <div class="order-management text-center">
            Управлять своими заказами в личном кабинете: следить за статусом оплаты
            и доставки, хранить историю заказов
          </div>
        </slide>
        <slide class="mobile-version-block-header">
          <div class="reg-in-our-shop bold text-center">
            Зарегистрируйтесь <br>
            в нашем магазине, чтобы
          </div>
          <div class="rows-and-gear-icon"></div>
          <div class="order-management text-center">
            Управлять своими заказами в личном кабинете: следить за статусом оплаты
            и доставки, хранить историю заказов
          </div>
        </slide>

      </carousel>

      <div class="mobile-version-block-main">
        <div class="registration-text text-center">
          Регистрация
        </div>
        <form class="registration-form">
          <div class="form-group">
            <label class="label">Введите имя и фамилию контактного лица</label>
            <input
              v-model="fullName"
              placeholder="Имя и фамилия"
              class="form-control"
            >
          </div>
          <div class="form-group">
            <label class="label">Введите телефон</label>
            <input
              v-model="phone"
              placeholder="Телефон"
              class="form-control"
            >
          </div>
          <div class="form-group">
            <label class="label">Введите email</label>
            <input
              v-model="email"
              placeholder="Почта"
              class="form-control"
            >
          </div>
          <div class="form-group">
            <label class="label">Какую организацию вы представляете?</label>
            <select class="form-control">
              <option>Автосервис</option>
              <option>Автосервис</option>
              <option>Автосервис</option>
            </select>
          </div>
          <div class="form-group">
            <label class="label">Введите наименование организации</label>
            <div class="two-selectors">

              <select class="form-control first-selector">
                <option>ООО</option>
                <option>ООО</option>
                <option>ООО</option>
              </select>
              <input
                v-model="orgName"
                placeholder="Название огранизации"
                class="form-control second-selector"
              >
            </div>
          </div>

          <button
            type="submit"
            class="btn btn-orange btn-block"
          >
            Зарегистрироваться
          </button>

          <div class="accept-checkbox text-center">
            Нажимая на кнопку, вы даете согласие
            на обработку своих персональных данных
            и соглашаетесь с <a
              href="#"
              class="policy-link"
            >Политикой</a> конфиденциальности
          </div>

        </form>

        <div class="already-have-account text-center">
          <p>Уже зарегистрированы?</p>
          <a
            href="#"
            class="go-log-in"
          >Войти</a>
        </div>
      </div>

    </div>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Carousel, Slide } from 'vue-carousel'

@Component({
  components: {
    Carousel,
    Slide
  }
})
export default class HelloWorld extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/variables.scss";
@import "styles.scss";
</style>
