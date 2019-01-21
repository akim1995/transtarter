<template>
  <div class="registration">
    <!-- desktop version -->
    <div class="desktop-version-block">
      desktop-version
    </div>
    <!-- mobile version -->
    <div class="mobile-version-block">

      <div class="mobile-version-block-header">
        <div class="reg-in-our-shop bold text-center">
          Зарегистрируйтесь <br>
          в нашем магазине, чтобы
        </div>
        <div class="rows-and-gear-icon"></div>
        <div class="order-management">
          Управлять своими заказами в личном кабинете: следить за статусом оплаты
          и доставки, хранить историю заказов
        </div>
      </div>

    </div>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/variables.scss";
@import "styles.scss";
</style>
