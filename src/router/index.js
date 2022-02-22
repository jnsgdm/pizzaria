import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Pedir',
    name: 'Pedir',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pedir.vue')
  },
  {
    path: '/Status',
    name: 'Status',
    component: () => import(/* webpackChunkName: "about" */ '../views/Status.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
