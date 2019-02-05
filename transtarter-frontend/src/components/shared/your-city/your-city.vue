<template>
  <div class="your-city" v-if="showYourCityBlock">
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
import { DisplayModule } from '../../../store/modules/display.module'

@Component
export default class YourCity extends Vue {
  closeYourCity () {
    this.$store.dispatch('display/toggleYourCity')
  }

  closeYourCityAndOpenSelectCity () {
    this.$store.dispatch('display/toggleYourCityAndOpenSelectCity')
  }

  get showYourCityBlock () {
    return DisplayModule.showBlock.yourCity
  }
  // created () {
  //   setTimeout(() => {
  //     eventBus.$emit('close-your-city')
  //   }, 10000)
  // }
}
</script>

<style lang="scss" scoped>
@import "your-city-styles.scss";
</style>
