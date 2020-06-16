import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import index from '@/components/layouts/index.vue'
import Movies from '@/components/Movies.vue'
import Movie from '@/components/Movie.vue'
import Styles from '@/components/Styles.vue';
import Slots from '@/components/Slots.vue';
import ComputedProperties from '@/components/ComputedProperties.vue';
import Watcher from '@/components/Watcher.vue';
import CommunicatingEvents from '@/components/CommunicatingEvents.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: index
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
  {
    path: '/styles',
    name: 'styles',
    component : Styles    
  },
  {
    path: '/computed',
    name: 'computed',
    component : ComputedProperties    
  },
  {
    path: '/watcher',
    name: 'watcher',
    component : Watcher    
  },
  {
    path: '/slots',
    name: 'slots',
    component : Slots    
  },
  {
    path: '/events',
    name: 'events',
    component : CommunicatingEvents    
  },  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
