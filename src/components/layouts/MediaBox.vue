<template>
    <div>
        <slot name="heading">{{ title }}</slot>
        <slot></slot>
        
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String
            },
        },
    }
</script>

<style scoped>
div{
    border: 2px solid black;
    width : 20%;
    display: flex;
    flex-direction: column;
    justify-items: auto;
    align-items: center;
    align-content: center;

}
</style>