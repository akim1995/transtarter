<template>
    <form class="container search__form">
          <span class="search__form__select-numbers">
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

          </select>

          <div class="search__input search-input">
            <div class="search__icon-lins"></div>
            <input
              type="text"
              class="search-input-desktop"
              ref="searchInputDesktop"
              v-model="searchText"
            >
            <div
              class="search__clear"
              @click="clearSearchInput"
            ></div>
            <ts-ui-search-results
              :found-items='foundItems'
              v-if="foundItems.length"
              class="desktop-search-result"
              v-click-outside="closeSearchResult"
            ></ts-ui-search-results>
          </div>
          <button
            type="submit"
            class="search__btn-search"
          >Найти</button>
        </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { HeaderSearchText } from '@/components/mixins/header-search-text.ts'
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
export default class SearchFormDesktop extends mixins(HeaderSearchText) {}
</script>
