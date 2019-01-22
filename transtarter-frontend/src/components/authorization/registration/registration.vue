<template>
  <div class="wrapper registration">

    <!-- desktop version -->
    <div class="desktop-version-modal modal-popup">
      <div class="close">✖</div>

      <div class="desktop-version-modal-left-side">

        <RegistrationForm />

      </div>

      <div class="desktop-version-modal-right-side">
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
    <!-- end of desktop version -->

    <!-- mobile version -->
    <div class="mobile-version-modal modal-popup">
      <div class="close">✖</div>

      <carousel
        :perPage='1'
        class="mobile-version-modal-carousel"
      >
        <slide class="mobile-version-modal-header">
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
        <slide class="mobile-version-modal-header">
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

      <div class="mobile-version-modal-main">

        <RegistrationForm />

      </div>
    </div>
    <!-- end of mobile version -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Carousel, Slide } from 'vue-carousel'
import RegistrationForm from '@/components/registration/registration-form/registration-form.vue'

@Component({
  components: {
    Carousel,
    Slide,
    RegistrationForm
  }
})
export default class Registration extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/variables.scss";
@import "registration-styles.scss";
</style>
