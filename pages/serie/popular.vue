<template>
    <div v-if="isReady">
        <div>
            <WrapperPreviews :list="modules.results" @selected="((id) => navigateTo('/serie/details/' + id))"/>
        </div>
    </div>
</template>
  
<script setup>
    const modules = ref("");
    const isReady = ref(false)
    onMounted(async () => {
        await useApi('tv/popular')
        .then( response => {
            modules.value = response.data
            isReady.value = true;
        });
    });
</script>

<style>
</style>