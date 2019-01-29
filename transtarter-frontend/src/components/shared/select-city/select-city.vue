<template>
  <div class="select-city">
    <div class="tip">Выберите ваш город</div>
    <ul class="cities">
      <li
        class="city"
        v-for="(city, index) in cities"
        :key="index"
        @click="selectCity(city)"
      >{{city}}</li>
    </ul>
    <div class="city-select-tip">Если вашего города нет в списке, выбирайте ближайший</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { eventBus } from '../../../main'

@Component
export default class SelectCity extends Vue {
  cities = [
    'Москва',
    'Калининград',
    'Екатеринбург',
    'Санкт-Петербург',
    'Пермь',
    'Киров',
    'Киев',
    'Алматы'
  ];

  selectCity (cityName: string) {
    eventBus.$emit('select-city', cityName)
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "select-city-styles.scss";
</style>
