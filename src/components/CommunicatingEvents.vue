<template>
    <div>
        <h1>Panier</h1>
        <p>Le panier comporte {{ numberCartProducts }} produits</p>

        <!-- Affichage de tous les produits -->
        <div class="wrapper">
            <div v-for="product in products" :key="product.id">
                <Product :titre="product.titre" :description="product.description" :prix="product.prix" @product-addded="addProductToCart"/>
            </div>
        </div>
    </div>
</template>

<script>
import Product from '@/components/Product.vue';
    export default {
        data() {
            return {
                numberCartProducts : 0,
                products : [
                    {
                        id: 1,
                        titre : "Produit 1",
                        prix : 20
                    },
                    {
                        id: 2,
                        titre : "Produit 2",
                        prix : 40
                    },
                    {
                        id: 3,
                        titre : "Produit 3",
                        prix : 60
                    }
                ]
            }
        },
        components: {
            Product
        },
        methods: {
            // Incrementer le compteur des produits dans le panier lorsque l'on recoit l'evenement du composant enfant "Product"
            addProductToCart() {
                this.numberCartProducts ++
            }
        },
    }
</script>

<style scoped>
    .wrapper{
        display: flex;
        flex-direction: row;
        justify-content: center;
        width : 50%;
    }
</style>