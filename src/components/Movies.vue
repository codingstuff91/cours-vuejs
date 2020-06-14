<template>
    <div>
        <h1>Voici la liste des films :</h1>
        <!-- Affichage d'une boucle de films avec pour chaque film un lien qui va ouvrir un autre lien d'affichage des détails de chaque film -->
        <div class="wrapper">
            <div v-for="movie in movies" :key="movie.id">
                <h2><router-link :to="{ name: 'movie', params: { id: movie.id } }">{{movie.title}}</router-link></h2>
            </div>
        </div>
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
.selected{
	font-size: 24px;
}
.disabled{
    background-color: cornsilk;
}
.activeLink{
    background-color: darkgreen;
}

</style>