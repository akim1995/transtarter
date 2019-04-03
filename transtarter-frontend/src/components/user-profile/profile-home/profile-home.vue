<template>
  <div>
    <transition name="opacity">
<<<<<<< HEAD
    <component @fill-out-status="selectedComponent = $event" :is="selectedComponent"></component>
=======
    <component @fill-out-status="addressIsFilledOut = $event" :is="selectedComponent"></component>
>>>>>>> master
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import fillOutAddress from './fill-out-address/fill-out-address.vue'
import mainProfileHome from './main-profile-home/main-profile-home.vue'

@Component({
  components: {
    fillOutAddress,
    mainProfileHome
  }
})
export default class ProfileOrders extends Vue {
<<<<<<< HEAD
  // return 'mainProfileHome'
  selectedComponent:string = 'fillOutAddress';
=======
  get selectedComponent () {
    if (!this.addressIsFilledOut) {
      return 'fillOutAddress'
    } else {
      return 'mainProfileHome'
    }
  }
  addressIsFilledOut:boolean = false;
>>>>>>> master
}
</script>

<style src="./profile-home.scss" scoped lang="scss"></style>
