<template>
    <div v-if="isReady">
        <h2>{{ modules.title }}</h2>
        <div class="row">
            <div class="row__information row__information--left">
                <UtilImages class="image image__poster" :imageName="modules.poster_path" size="w400"/>
                <p>Average: {{ modules.vote_average }}</p>
                <a v-if="modules.homepage" :href="modules.homepage" target="_blank">Homepage</a>
                <div class="row row__genre">
                    <p><span v-for="genre, index in modules.genres" :key="index">{{(index > 0 ? ', ' : '') + genre.name }}</span></p>
                </div>
            </div>
            <div class="row__information row__information--right">
                <UtilImages class="image image__background" :imageName="modules.backdrop_path" size="original"/>
                <p>{{ modules.overview }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    const route = useRoute();
    const modules = ref(null);
    const isReady = ref(false);
    onMounted(async () => {
        const consult = 'tv/' + route.params.id;
        console.log(consult)
        await useApi(consult)
        .then( response => {
            modules.value = response.data;
            isReady.value = true;
        });
    });
</script>

<style lang="sass">
@import ~~/assets/styles/variables
h2
    padding: 0 $unit-grid * 2
.image
    border-radius: $unit-grid
    &__background
        width: 100%
    &__poster
        width: 100%
.row
    padding: $unit-grid * 2
    &__genre
        padding: 0
    &__information
        padding: 0 $unit-grid * 1.5
        p
            margin: $unit-grid * 0.75 0
        a
            color: $primary
            margin: $unit-grid * 0.75 0
            text-decoration: none
            &:hover
                color: $secondary
@media (min-width: '500px')
    .row
        display: flex
        &__information
            &--left
                width: 100%
                max-width: 400px
            &--right
                width: 100%
</style>