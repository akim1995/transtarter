<template>
  <div>
    <div class="container">

    <!-- RADIO BUTTON -->
    <H2>radio button</H2>
    <br>
    <input type="radio" id="radio1" name="deliver-address" class="radio">
    <label for="radio1" class="radio-label">г. Дзержинский, ул. Энергетиков 18А </label>
    <!-- RADIO BUTTON END -->

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class StyleGuide extends Vue {}
</script>
