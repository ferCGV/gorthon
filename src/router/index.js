import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/cursos',
      name: 'cursos',
      component: () => import('../views/Cursos.vue')
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },

    {
      path: '/comentarios',
      name: 'comentarios',
      component: () => import('../views/Comentarios.vue')
    },

    
   
  ]
})

export default router