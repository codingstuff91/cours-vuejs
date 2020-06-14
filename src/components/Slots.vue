<template>
    <div>
        <!-- Appel du composant enfant en lui passant un texte comme SlotComponents -->
        <BaseButton>TEST DE TITRE DYNAMIQUE DE BOUTON</BaseButton>

        <!-- Appel du composant enfant MediaBox en lui donnant un template dynamique -->
        <Mediabox>
            <h1>Titre dynamique envoyé au composant enfant</h1>
            <p>Paragraphe dynamique envoyé au composant enfant</p>
        </Mediabox>

        <!-- Appel du composant enfant MediaBox en lui donnant un template dynamique et des props-->
        <Mediabox :title="dynamicTitle">
            <h1>Titre dynamique envoyé au composant enfant</h1>
            <p>Paragraphe dynamique envoyé au composant enfant</p>
        </Mediabox>
    </div>
</template>

<script>
import MediaBox from '@/components/SlotComponents/MediaBox.vue';
import BaseButton from '@/components/SlotComponents/BaseButton.vue';

    export default {
        data() {
            return {
                dynamicTitle : "Exemple de titre"
            }
        },
        components: {
            BaseButton,
            MediaBox
        },
    }
</script>