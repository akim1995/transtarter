
<template>
  <div class="request-call modal-wrapper">
    <div class=" modal-popup">
      <div class="modal-content request-call-content">
        <div
          class="close"
          @click="toggleRequestPopup()"
        >✖</div>
        <div class="title text-center">
          Укажите контактные данные
          и удобное время для звонка
        </div>
        <div class="we-will-call-you text-center">
          Выбранный менеджер свяжется с вами<br> в удобное вам время
        </div>
        <div class="available-managers">
          <div class="manager small-manager manager-1"></div>
          <div class="manager big-manager manager-2"></div>
          <div class="manager small-manager manager-3"></div>

        </div>
        <div class="manager-2-info text-center">
          <div class="name">Татьяна</div>
          <div class="company">Специалист «Транс Стартер» </div>
        </div>
        <form class="narrow-form">
          <div class="form-group row">
            <label class="big-label mobile-top-label">Как к вам обращаться?</label>
            <div class="col-12">
              <input
                type="text"
                class="form-control-lg"
                placeholder="ИП Воронов И.Е"
              >
            </div>
          </div>
          <div class="form-group row">
            <label class="big-label mobile-top-label">Введите телефон</label>
            <div class="col-12">
              <input
                type="text"
                class="form-control-lg"
                placeholder="Егор Воронов"
              >
            </div>
          </div>
          <div class="form-group row">
            <label class="big-label mobile-top-label">Когда вам позвонить?</label>
            <div class="col-12">
              <input
                type="text"
                class="form-control-lg"
                placeholder="+7 (900) 111-11-11
"
              >
            </div>
          </div>
          <div class="form-group row row-with-big-space">
            <label class="col-0"></label>
            <div class="col-12">
              <button
                type="submit"
                class="btn btn-orange btn-block"
              >
                Заказать звонок
              </button>
            </div>
          </div>

          <div class="row">
            <div class="col-0"></div>
            <div class="accept-checkbox col-12 text-center">
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { eventBus } from '../../../main'

@Component
export default class RequestCall extends Vue {
  toggleRequestPopup () {
    eventBus.$emit('toggle-request-call-popup-modal')
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
@import "./request-call-styles.scss";
</style>
