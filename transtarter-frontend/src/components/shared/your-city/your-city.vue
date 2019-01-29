<template>
  <div class="your-city">
    <div class="question text-center">
      Ваш город Москва?
    </div>
    <div class="answer">
      <button class="btn" @click="closeYourCity()">Да</button>
      <button class="btn" @click="closeYourCityAndOpenSelectCity()">Сменить город</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { eventBus } from '../../../main'

@Component
export default class YourCity extends Vue {
  closeYourCity () {
    eventBus.$emit('close-your-city')
  }

  closeYourCityAndOpenSelectCity () {
    eventBus.$emit('close-your-city-and-open-select-city')
  }

  created () {
    setTimeout(() => {
      eventBus.$emit('close-your-city')
    }, 10000)
  }
}
</script>

<style lang="scss" scoped>
.your-city {
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.30214);
  top: 24px;
  left: 24px;
  padding: 21px 24px 16px;
  .question,
  .answer {
    font-weight: bold;
    line-height: 24px;
    font-size: 16px;
    color: #323230;
  }
  .question {
    font-family: "PT Sans";
    margin-bottom: 10px;
  }
  .answer {
    font-family: "Exo 2";
    display: flex;
    .btn {
      border: 1px solid #d2d2d2;
      border-radius: 4px;
      height: 40px;
      padding: 7px 16px;
      &:first-child {
          margin-right: 8px;
          width: 102px;
      }
    }
  }
}
</style>
