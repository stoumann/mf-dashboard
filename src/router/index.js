import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Testing from '../views/Testing.vue'
import Graphs from '../views/Graphs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/testing',
      name: 'testing',
      component: Testing
    },
    {
      path: '/graphs',
      name: 'graphs',
      component: Graphs
    },
  ]
})

export default router
