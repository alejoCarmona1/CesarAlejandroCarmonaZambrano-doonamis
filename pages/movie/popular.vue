<template>
    <div v-if="isReady">
        <div>
            <WrapperPreviews isMovie :list="modules.results" @selected="((id) => navigateTo('/movie/details/' + id))"/>
        </div>
    </div>
</template>
  
<script setup>
    const modules = ref("");
    const isReady = ref(false)
    onMounted(async () => {
        await useApi('movie/popular','&page=1')
        .then( response => {
            modules.value = response.data
            isReady.value = true;
        });
    });
</script>

<style>
</style>