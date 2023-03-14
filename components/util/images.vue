<template>
    <img :src="'https://image.tmdb.org/t/p/'+ size + imageName" />
</template>
<script setup>
    const props = defineProps({
        imageName: {
            type: String,
            require: true
        },
        size: {
            type: String,
            require: false,
            default: 'w200'
        }
    });
</script>
<style>
</style>
