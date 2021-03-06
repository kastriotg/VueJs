import { createRouter, createWebHistory } from 'vue-router'
import Lesson1 from '../views/Lesson1.vue'

const routes = [
  {
    path: '/',
    name: 'Lesson1',
    component: Lesson1
  },
  {
    path: '/lesson2',
    name: 'Lesson2',
    component: () => import('../views/Lesson2.vue'),
  },
  {
    path: '/lesson3',
    name: 'Lesson3',
    component: () => import('../views/Lesson3.vue'),
  },
  {
    path: '/lesson4',
    name: 'Lesson4',
    component: () => import('../views/Lesson4.vue'),
  },
  {
    path: '/lesson5',
    name: 'Lesson5',
    component: () => import('../views/Lesson5.vue'),
  },
  {
    path: '/lesson6',
    name: 'Lesson6',
    component: () => import('../views/Lesson6.vue'),
  },
  {
    path: '/lesson7',
    name: 'Lesson7',
    component: () => import('../views/Lesson7.vue'),
  },
  {
    path: '/lesson8',
    name: 'Lesson8',
    component: () => import('../views/Lesson8.vue'),
  },
  {
    path: '/lesson9',
    name: 'Lesson9',
    component: () => import('../views/Lesson9.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
