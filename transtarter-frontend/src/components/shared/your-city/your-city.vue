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

  // created () {
  //   setTimeout(() => {
  //     eventBus.$emit('close-your-city')
  //   }, 10000)
  // }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "your-city-styles.scss";
</style>
