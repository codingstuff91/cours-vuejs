<template>
  <div id="boite">
      <h1>Je suis la liste des evenements</h1>
      <div v-for="(item,index) in events" :key="index">
        <p>{{ item.title }}</p>
      </div>
  </div>
</template>

<script>

import Events from '@/components/Events.vue';
import axios from 'axios';
import eventService from '@/Services/eventsServices.js';

export default {
  name: 'Home',
  components: {
    Events
  },
  data(){
    return{
      events : [],
      name : ''
    }
  },
  mounted(){
    eventService.getEvents()
    .then((response)=>{
      response.data.forEach(element => {
        this.events.push(element)     
      });
    })
    .catch(err => console.log(err))
  }
}
</script>
    
