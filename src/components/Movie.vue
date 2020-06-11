<template>
<div>
  <h1>{{movie.title}}</h1>
  <p>{{movie.description}}</p>
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
    movieServices.showMovie(this.$route.params.id)
    .then((response)=>{
      console.log(response.data)
      this.movie = response.data
    })
    .catch(err => console.log(err))
  }
}
</script>

