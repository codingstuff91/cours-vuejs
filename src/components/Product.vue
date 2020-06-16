<template>
    <div>
        <div class="card">
            <h1>{{ titre }}</h1>
            <h3>{{ prix }}€</h3>
            <p>{{ description }}</p>
            <button @click="addEventToCart">Ajouter produit au panier</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            addEventToCart() {
                // Emission d'un evenement en vue d'etre écoute par un composant parent
                this.$emit('product-addded')
            }
        },
        props: {
            titre: {
                type: String,
            },
            description: {
                type: String,
            },
            prix: {
                type: Number,
            }
        },
    }
</script>
