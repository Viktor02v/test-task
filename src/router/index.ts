import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeVue.vue'),
    },
    {
      path: '/country/:name-:countryCode',
      name: 'country',
      component: () => import('../views/country-view.vue'),
    },
  ],
})

export default router
