<template>
<div>
  <h1>ID du FILM : {{ this.$route.params.id }}</h1>
</div>
</template>

<script>
import movieServices from '@/Services/movieServices.js';

export default {
  name: 'Movie',
  data(){
    return{
      movie : {}
    }
  },
  mounted(){

  }
}
</script>

