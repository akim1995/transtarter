
<template>
  <div class="request-call modal-wrapper">
    <div class=" modal-popup">
      <div class="modal-content request-call-content">
        <div
          class="close"
          @click="toggleLogInPopup()"
        >✖</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class RequestCall extends Vue {}
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
@import "./request-call-styles.scss";
</style>
