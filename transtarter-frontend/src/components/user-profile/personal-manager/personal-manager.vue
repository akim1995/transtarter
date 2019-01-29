<template>
  <div class="personal-manager">
    <div class="personal-manager-top">
      <div class="question-sign"></div>
      <div class="have-questions">
        По любым вопросам обращайтесь к вашему личному менеджеру
      </div>

    </div>
    <div class="personal-manager-bottom">
      <div class="manager-picture"></div>
      <div class="manager-fullname">
        Иван Петров
      </div>
      <a class="manager-phone" href="tel:7-900-111-11-11">
          + 7 (900) 111-11-11
      </a>
      <a class="manager-email" href="mailto:i.petrov@tstarter.ru">
          i.petrov@tstarter.ru
      </a>
      <button class="ask-question" @click="toggleRequestPopup()">
          Задать вопрос
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { eventBus } from '../../../main'

@Component
export default class PersonalManager extends Vue {
  toggleRequestPopup () {
    eventBus.$emit('toggle-request-popup-modal')
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
@import "./personal-manager-styles.scss";
</style>
