<template>
    <div class="w-full h-screen grid bg-orangeMain bg-opacity-10 grid-template">
        <DashboardSidebar/>
        <NuxtPage/>
    </div>
</template>
<script setup>

definePageMeta({
    middleware: 'auth'
})

</script>
<style scoped>
    .grid-template{
        grid-template-columns: auto 1fr;
    }
</style>