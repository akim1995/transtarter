<template>
  <form class="search__form">
    <div class="form-row">
      <span class="search__select-numbers ">
        123
      </span>
      <select
        class="search__select"
        name=""
      >
        <option
          disabled
          value=""
          selected
        >Номер детали</option>
        <option value="detail_1">Детали 1</option>
        <option value="detail_2">Детали 2</option>
        <option value="detail_3">Детали 3</option>
        <option value="detail_4">Детали 4</option>
        <option value="detail_5">Детали 5</option>
        <option value="detail_6">Детали 6</option>
        <option value="detail_7">Детали 7</option>
      </select>
    </div>

    <div
      class="form-row"
      style="position: relative;"
    >
      <div class="search__input-mobile search-input">
        <input
          type="text"
          class="search-input-mobile"
          ref="searchInputMobile"
          v-model="searchText"
        >
        <div
          class="search__clear"
          @click="clearSearchInput"
        ></div>

      </div>
      <button
        type="submit"
        class="search__btn-search"
      >
        <div class="search__icon-lins"></div>
      </button>
      <ts-ui-search-results
        :found-items='foundItems'
        v-if="foundItems.length"
        class="mobile-search-result"
        v-click-outside="closeSearchResult"
      ></ts-ui-search-results>
    </div>

  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { HeaderSearchText } from '@/components/mixins/header-search-text'
import { mixins } from 'vue-class-component'
import SearchResults from '@/components/shared/header/search-results/search-results.vue'
import { clickOutside } from '@/directives/v-click-outside'

@Component({
  components: {
    'ts-ui-search-results': SearchResults
  },
  directives: {
    clickOutside
  }
})
export default class SearchFormMobile extends mixins(HeaderSearchText) {}
</script>
