import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	{
		path: '/',
		name: 'home',
		component: () => import('../views/HomeVue.vue')
	},
	{
		path: '/countries/:name-:countryCode',
		name: 'country',
		component: () => import('../views/countries/[name].vue'),
	 },
  ],
})

export default router
