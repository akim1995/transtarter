<template>
  <div class="shipping-addresses-tab">

    <div class="address-names">Адреса доставки</div>
    <ul class="exist-addresses">
      <li class="exist-address">
        <div class="text">
          Москва, ул. Ткаченко, 23-5, Транспортная компания ПЭК
        </div>
        <div class="edit-block">
          <span class="icon save"></span>
          <span class="icon edit"></span>
        </div>

      </li>
      <li class="exist-address">
        <div class="text">
          г. Дзержинский, ул. Ленина, 145, Самовывоз
        </div>
        <div class="edit-block">
          <span class="icon save"></span>
          <span class="icon edit"></span>
        </div>

      </li>
    </ul>
    <button class="btn btn-outline">Добавить ещё адрес</button>

    <div class="new-address">
      <div class="title">Новый адрес</div>
      <form>
        <div class="form-group row">
          <label class="col-xl-4 big-label mobile-top-label">Способ доставки</label>
          <div class="col-xl-6 col-12">
            <select class="form-control">
              <option
                disabled
                value=""
              >Выберите один из вариантов</option>
              <option>Самовывоз</option>
              <option>Доставка</option>
            </select>
          </div>
        </div>
        <div
          class="form-group row row-with-big-space"
          style="align-items: flex-start;"
        >
          <label class="col-xl-4 col-6 big-label">Точка выдачи</label>
          <label class="col-xl-6 col-6 green-link text-left">Москва
            <label class="radio">
              <input type="radio" />
              <div class="radio__text">А я переключаю радиокнопку</div>
            </label>
            <label class="radio">
              <input type="radio" />
              <div class="radio__text">А я переключаю радиокнопку</div>
            </label>
            </label>

        </div>
        <div
          class="form-group row"
          style="align-items: flex-start;"
        >
          <label class="col-xl-4 big-label mobile-top-label">Адрес доставки</label>
          <div class="col-xl-6 col-12">
            <textarea
              type="text"
              class="form-control-lg"
              placeholder="г. Москва, ул. Ткаченко, 23-5"
              rows="8"
            />
            </div>
        </div>

        <div class="form-group row row-with-big-space">
          <label class="col-xl-4 col-0"></label>
          <div class="col-xl-6 col-12">
            <button
              type="submit"
              class="btn btn-orange btn-block-mobile"
            >
              Добавить адрес
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-4 col-0"></div>
          <div class="col-xl-6 accept-checkbox col-12">
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
    </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ShippingAddressesTab extends Vue {}
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
@import "./shipping-addresses-tab-styles.scss";
</style>
