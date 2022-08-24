import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterView')
  },
  {
    path: '/reset',
    name: 'reset',
    component: () => import('@/views/ResetView')
  }
]

const router = new VueRouter({
  routes
})

export default router
