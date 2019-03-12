<template>
  <div
    class="log-in modal-wrapper"
    v-if="!supportedBrowser"
  >
    <div class="modal-popup narrow-popup">
      <div class="modal-content unsupported-browser-content">
        <div class="title bold">
          К сожалению, мы не поддерживаем ваш браузер
        </div>

        <div class="tip">
          Установите один из современных браузеров, которые мы поддерживаем
        </div>

        <ul class="browsers-list">
          <li>
            <a
              href="https://www.google.com/chrome/"
              class="browser-item"
            >
              <div class="browser browser-chrome"></div>
              <p class="browser-name">Google Chrome</p>
            </a>
          </li>
          <li>
            <a
              href="https://www.mozilla.org/en-US/firefox/new/"
              class="browser-item"
            >
              <div class="browser browser-firefox"></div>
              <p class="browser-name">Mozilla Firefox</p>
            </a>
          </li>
          <li>
            <a
              href="https://www.opera.com/?utm_medium=roc&utm_source=burocratik&utm_campaign=outdatedbrowser"
              class="browser-item"
            >
              <div class="browser browser-opera"></div>
              <p class="browser-name">Opera</p>
            </a>
          </li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { detect } from 'detect-browser'
const browser = detect()

@Component
export default class UnsupportedBrowser extends Vue {
  supportedBrowser = true;

  mounted () {
    switch (browser && browser.name) {
      case 'edge':
      case 'ie':
        this.supportedBrowser = false
        break
    }
  }
}
</script>

<style scoped lang="scss">
@import "./unsupported-browser.scss";
</style>
