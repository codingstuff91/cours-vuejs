<template>
    <div>
        <h1>Voici la liste des films :</h1>
        <!-- Affichage d'une boucle de films avec pour chaque film un lien qui va ouvrir un autre lien d'affichage des détails de chaque film -->
        <div class="wrapper">
            <div v-for="movie in movies" :key="movie.id">
                <h2><router-link :to="{ name: 'movie', params: { id: movie.id } }">{{movie.title}}</router-link></h2>
            </div>
        </div>
        
        <!-- Changer l'etat d'une variable via l'ecoute d'un clic -->
        <button @click="active = !active">Changer etat actif</button>

        <!-- Exemple de compteur dynamique lié a une fonction d'incrémentation via un evenement de type click  -->
        <button @click="incrementCounter">Incrementer compteur</button>
        <p>Le compteur vaut {{counter}}</p>

        <!-- Premiere version du composant dynamique 1 titre 1 parag 1 image-->
        <MediaBox title="titre par defaut">
            <h1 slot="heading">Titre envoye au composant</h1>
            <p>Je suis un texte envoye dynamiquement</p>
        </MediaBox>

        <!-- deuxieme version du composant dynamique avec 1 titre -->
        <MediaBox>
            <h1>Je suis le titre du composant 2</h1>
            <img src="../assets/logo.png" alt="">
        </MediaBox>

        <!-- Liste déroulante de choix de pays pour alimenter le composant enfant MAP via une prop -->
        <select name="" id="" v-model="country">
            <option value="France">France</option>
            <option value="Italie">Italie</option>
            <option value="Angleterre">Angleterre</option>
        </select>

        <!-- Appel du composant enfant map en lui passant la valeur du pays choisi dans le select ci dessus -->
        <Map :pays="country" :drapeau="flag"></Map>

        <!-- Exemple de style binding basé sur une condition ternaire -->
        <p :class="[ active ? activeClass : '']">Ceci est un texte avec un style dynamique</p>

        <!-- Exemple utilisation d'une computed property nommée getFullPrice -->
        <p>Le prix natif est de {{ price }} transformé est de {{ getFullPrice }} et avec la reduc ca donne : {{ displayDiscountedPrice }}</p>
    </div>
</template>

<script>
import movieServices from '@/Services/movieServices.js';
import BaseButton from '@/components/layouts/BaseButton.vue';
import MediaBox from '@/components/layouts/MediaBox.vue';
import Map from '@/components/Map.vue';

    export default {
        data() {
            return {
                movies : [],
                personnalStyle : {
                    width : '100px',
                    backgroundColor : 'blue'
                },
                active : true,
                activeClass : 'activeLink',
                price : 2300,
                counter : 0,
                country : '',
                flag : 'logo.png'
            }
        },
        computed :{
            getFullPrice(){
                return this.price / 100 + "€";
            },
            displayDiscountedPrice(){
                return (this.price - (this.price * 0.3)) / 100;
            }
        },
        components: {
            Map,
            BaseButton,
            MediaBox
        },
        watch: {
            counter(newValue, oldValue) {
                if (newValue >= 20) {
                    alert('il ne faut pas aller jusqua 20');
                    this.counter = 19
                }
            }
        },
        methods: {
            incrementCounter() {
               this.counter ++     
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