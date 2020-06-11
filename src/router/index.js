import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import index from '@/components/layouts/index.vue'
import Conteneur from '@/components/Conteneur.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: index
  },
  {
    path: '/about',
    name: 'About',
    component : About
  },
  {
    path: '/events',
    name: 'events',
    component : Conteneur    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
