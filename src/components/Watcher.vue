<template>
    <div>
        <!-- Afficher le prix du produit -->
        <h2>Prix du produit : {{ price }}€</h2>
        <button @click="increasePrice">Augmenter le prix du produit</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                price : 0
            }
        },
        methods: {
            increasePrice() {
                this.price ++
            }
        },
        watch: {
            // Empecher de fixer le prix supérieur à 10
            price(newValue, oldValue) {
                if(newValue > 10){
                    alert('le prix ne doit pas dépasser 10€')
                    this.price = 10
                }
            }
        },
    }
</script>