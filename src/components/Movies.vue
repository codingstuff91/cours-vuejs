<template>
    <div>
        <h1>Voici la liste des films :</h1>
        <ul>
            <li v-for="movie in movies" :key="movie.id"><router-link :to="{ name: 'movie', params: { id: movie.id } }">{{movie.title}}</router-link></li>
        </ul>
    </div>
</template>

<script>
import movieServices from '@/Services/movieServices.js';
    export default {
        data() {
            return {
                movies : []
            }
        },
        mounted () {
            movieServices.getMovies()
            .then((response)=>{
                response.data.forEach(element => {
                    this.movies.push(element)
                });
            })
        },
    }
</script>

<style>

</style>