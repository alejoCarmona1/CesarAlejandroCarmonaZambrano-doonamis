<template>
    <div class="menu">
        <a class="menu__link" @click="(navigateTo('/movie/popular/'))">Movies</a>
        <a class="menu__link" @click="(navigateTo('/serie/popular/'))">Tv Series</a>
    </div>
    <main>
        <slot/>
    </main>
</template>
<style lang="sass">
@import ~~/assets/styles/variables
.menu
    background-color: $primary
    padding: $unit-grid
    &__link
        font-size: $unit-grid * 3
        color: $primary-bcg-color
        cursor: pointer
        padding: $unit-grid * 0.5 $unit-grid
        &:hover
            color: $secondary
            
</style>