import Vue from 'vue'
import Router from 'vue-router'
import UserSettings from '@/components/user-profile/profile-settings/profile-settings.vue'
import ProfileOrders from '@/components/user-profile/profile-home/profile-home.vue'
import ProfileCart from '@/components/user-profile/profile-cart/profile-cart.vue'
import styleGuide from '@/components/shared/styleguide.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/catalog/account',
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
    },
    {
      path: '/styleguide',
      component: styleGuide
    }
  ]
})
