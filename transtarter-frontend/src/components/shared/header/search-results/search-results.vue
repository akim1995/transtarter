
<template>
  <div class="search-results">
    <div class="search-results__header">
      <div class="search-results__header-item">Описание</div>
      <div class="search-results__header-item">Номер</div>
      <div class="search-results__header-item">Производитель</div>
    </div>
    <div class="search-results__body">
      <ul
        class="search-results__body-row"
        v-for="(item, $index) in foundItems"
        :key='$index'
      >
        <li class='search-results__body-row-item'>
          {{ item.desc }}
        </li>
        <li class='search-results__body-row-item'>
          {{ item.number }}
        </li>
        <li class='search-results__body-row-item'>
          {{ item.manufacturer }}
        </li>
        <li class='search-results__body-row-item-optional' v-if="item.alreadyInBucket">
          <div class="already-in-bucket">
            <div class="shopping-bucket-icon"></div>
            <div class="items-in-bucket">{{ item.alreadyInBucket }} шт.</div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { clickOutside } from '@/directives/v-click-outside/index'
import { ISearchResult } from '@/models/index'

@Component
export default class SearchResults extends Vue {
  @Prop({ default: () => [] }) readonly foundItems!: ISearchResult[]
}
</script>

<style scoped lang="scss">
@import "./search-results.scss";
</style>
