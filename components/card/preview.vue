<template>
    <div class="card" @click="$emit('selected', id=props.id)">
        <UtilImages :imageName="imageName" />
        <div class="card__information">
            <h4> {{ title }}</h4>
            <p>{{ year }}</p>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        title: {
            type: String,
            require: true
        },
        year: {
            type: String,
            require: false
        },
        imageName: {
            type: String,
            require: true
        },
        id: {
            type: Number,
            require: true
        }
    });
</script>
<style lang="sass">
@import ~~/assets/styles/variables
.card
    cursor: pointer
    overflow: hidden
    margin: $unit-grid * 2
    max-width: $unit-grid * 25
    width: fit-content
    min-width: $unit-grid * 25
    border-radius: $unit-grid
    box-shadow: $unit-grid * 0.375 $unit-grid * 0.375 $unit-grid * 0.375 $unit-grid * 0.375 $primary-box-shadow
    &:hover
        box-shadow: $unit-grid * 0.375 $unit-grid * 0.375 $unit-grid * 0.375 $unit-grid * 0.375 $primary-bg
    &__information
        padding: 0 $unit-grid * 1.5
        h4
            margin: $unit-grid 0
            white-space: normal !important
        p
            margin: $unit-grid * 0.75 0
            
</style>
