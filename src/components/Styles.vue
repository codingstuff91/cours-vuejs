<template>
    <div>
        <button @click="active = !active">Changer etat statut paragraphe(actif/inactfif)</button>
        <!-- Paragraphe avec style basé sur une condition ternaire -->
        <p :class="[ active ? activeClass : '']">Paragraphe de test</p>
        <!-- Paragraphe lié a un style au format objet  -->
        <p :style="styles">Ceci est un paragraphe dont le style provient d'un objet JS</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active : false,
                activeClass : 'activeLink',
                styles : {
                    fontSize : '24px',
                    width : '400px',
                    backgroundColor : 'blue'
                }
            }
        }
    }
</script>

<style scoped>
.activeLink{
    background-color: chartreuse;
}
</style>