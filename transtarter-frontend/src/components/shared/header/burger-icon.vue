<template>
  <span
    class="burger-icon"
    @click="toggleMainMenu()"
  >
  </span>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { store } from '@/store/index'

@Component
export default class BurgerIcon extends Vue {
  toggleMainMenu () {
    setTimeout(() => {
      store.dispatch('display/toggleBlockShowMenu')
    })
  }
}
</script>
