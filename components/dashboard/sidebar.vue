<template>
    <div class="flex flex-col p-3 bg-white shadow-xl group transition-all duration-300 justify-between w-auto ">
        <img src="assets/icon.svg" alt="logo" class="h-10">
        <div>

        </div>
        <button @click="supabase.auth.signOut()" class="flex items-center bg-orangeMain bg-opacity-20 text-text w-max p-5 rounded-full group-hover:gap-5">
            <i class="fi fi-rr-exit flex justify-center items-center"></i>
            <p class="group-hover:not-sr-only group-hover:text-text group-hover:w-max w-0 text-transparent transition-all duration-300">Logout</p>
        </button>
    </div>
</template>
<script setup>

const supabase = useSupabaseClient()




</script>
<style scoped>
    
</style>