<template>
  <div class="profile-settings">
    <div class="title">
      Профиль и настройки
    </div>

    <div
      class="btn-group btn-group-column"
      role="group"
      aria-label="Basic example"
    >
      <button type="button" @click="activateTab(tabs.regData)" :class="{ active: regDataIsActive }">Регистрационные данные</button>
      <button type="button" @click="activateTab(tabs.shippingAddresses)" :class="{ active: shippingAddressesIsActive }">Адреса доставки</button>
      <button type="button" @click="activateTab(tabs.requisites)" :class="{ active: requisitesIsActive }">Реквизиты и юр. лица</button>
    </div>

    <RegistrationDataTab v-if="regDataIsActive"/>
    <ShippingAddressesTab v-if="shippingAddressesIsActive"/>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RegistrationDataTab from './registration-data-tab/registration-data-tab.vue'
import ShippingAddressesTab from './shipping-addresses-tab/shipping-addresses-tab.vue'

@Component({
  components: {
    RegistrationDataTab,
    ShippingAddressesTab
  }
})
export default class ProfileSettings extends Vue {
  tabs = {
    regData: 'regData',
    shippingAddresses: 'shippingAddresses',
    requisites: 'requisites'
  }

  currentActiveTab = this.tabs.regData

  activateTab (newActiveTab: string) {
    this.currentActiveTab = newActiveTab
  }

  get regDataIsActive (): boolean {
    return this.currentActiveTab === this.tabs.regData
  }

  get shippingAddressesIsActive (): boolean {
    return this.currentActiveTab === this.tabs.shippingAddresses
  }
  get requisitesIsActive (): boolean {
    return this.currentActiveTab === this.tabs.requisites
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
@import "./profile-settings-styles.scss";
</style>
