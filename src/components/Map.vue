<template>
    <div>
        <h1>Je suis le componsant enfant nommé MAP</h1>
        <p>Le pays qui a été envoyé est {{ pays }}</p>
        <img :src="drapeau" alt="">
    </div>
</template>

<script>
    export default {
        props: {
            pays: {
                type: String,
            },
            drapeau : {
                type : String
            }
        },
    }
</script>