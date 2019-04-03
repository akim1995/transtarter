import Vue from 'vue'
import Router from 'vue-router'
import UserSettings from '@/components/user-profile/profile-settings/profile-settings.vue'
import ProfileOrders from '@/components/user-profile/profile-orders/profile-orders.vue'
import ProfileCart from '@/components/user-profile/profile-cart/profile-cart.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProfileOrders
    },
    {
      path: '/settings',
      name: 'settings',
      component: UserSettings
    },
    {
      path: '/cart',
      name: 'cart',
      component: ProfileCart
    }
  ]
})
