import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: process.env.CORDOVA_PLATFORM ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'notas',
      component: () => import ('./views/Notas.vue')
    },
    {
      path: '/componentes',
      name: 'componentes',
      component: () => import ('./views/Componentes.vue')
    },
    {
      path: '/calendario',
      name: 'calendario',
      component: () => import ('./views/Calendario.vue')
    }
  ]
})
