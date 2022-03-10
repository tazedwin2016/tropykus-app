import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/HomeView/:id',
    name: 'HomeView',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
