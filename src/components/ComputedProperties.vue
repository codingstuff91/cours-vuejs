<template>
    <div>
        <!-- Affichage du prix du produit brut en centimes -->
        <h2>Affichage du prix brut : {{ price }}</h2>
        <!-- Affichage du prix du produit transformé via computed properties -->
        <h2>Affichage du prix transformé : {{ getFullPrice }}</h2>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                price: 2300
            }
        },
        computed: {
            getFullPrice() {
                return this.price / 100 +"€" 
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>