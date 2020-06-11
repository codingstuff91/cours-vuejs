import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import index from '@/components/layouts/index.vue'
import Movies from '@/components/Movies.vue'
import Movie from '@/components/Movie.vue'

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
    path: '/movies',
    name: 'movies',
    component : Movies    
  },  
  {
    path: '/movie/:id',
    name: 'movie',
    component : Movie    
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
