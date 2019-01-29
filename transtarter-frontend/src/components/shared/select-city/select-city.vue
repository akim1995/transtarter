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
.select-city {
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.30214);
  top: 24px;
  left: 24px;
  font-family: "PT Sans";
  font-weight: bold;
  line-height: 24px;
  font-size: 16px;
  text-align: center;
  width: 305px;
  .tip {
    margin: 21px auto 11px;
  }
  .cities {
    .city {
      text-align: left;
      padding: 0 32px;
      height: 40px;
      position: relative;
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover {
        background-color: #e0ffe3;
        &::before {
          content: url("../../../assets/icons/svg/check.svg");
          position: absolute;
          left: 10px;
        }
      }
    }
  }
  .city-select-tip {
    line-height: 20px;
    font-size: 14px;
    color: #a3a3a2;
    text-align: left;
    padding: 19px 16px 13px;
  }
}
</style>
