import { createRouter, createWebHistory } from 'vue-router'
import cuaca from '../views/Cuaca.vue'
import lokasi from '../views/Lokasi.vue'
import stopwatch from '../views/Stopwatch.vue'
import foto from '../views/Foto.vue'
import gamekotak from '../views/Gamekotak.vue'


const routes = [
  {
    path: '/',
    name: 'cuaca',
    component: cuaca
  },

  {
    path: '/lokasi',
    name: 'lokasi',
    component: lokasi
  },

  {
    path: '/stopwatch',
    name: 'stopwatch',
    component: stopwatch
  },

  {
    path: '/foto',
    name: 'foto',
    component: foto
  },

  {
    path: '/gamekotak',
    name: 'gamekotak',
    component: gamekotak
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
