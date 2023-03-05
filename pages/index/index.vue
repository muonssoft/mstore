<template>
    <div class="flex flex-col justify-center items-center text-text gap-10 p-5 max-w-lg mx-auto w-full">
        <img src="@/assets/logo.svg" alt="" class="max-h-[3rem]">
                <div class="flex justify-center items-center flex-col gap-1">
                    <p class="font-light text-xl leading-none">Estamos en construcción</p>
                    <p class="font-light text-2xl leading-none">pero algo espéctacular se aproxima</p>
                    <p class="font-bold text-6xl leading-none mt-3">¡Espéranos!</p>
                </div>
            <div class="flex items-center justify-center flex-col gap-2 w-full">
                <div class="flex items-center w-full">
                        <input v-model="email" @keyup="sendStoresData" type="email" id="registre" class="bg-transparent min-w-[17rem] w-full placeholder:font-light px-5 py-2 border border-orangeMain rounded-l-xl" placeholder="Ingresa tu correo electrónico">
                        <nuxt-link to="/registro" class="text-text border border-orangeMain bg-orangeMain px-5 rounded-r-xl font-light w-max text-center py-2 cursor-pointer">Registrate</nuxt-link>
                </div>
                <nuxt-link to="/auth" class="text-text px-5 py-1 underline font-light">Si ya tienes cuenta,<span class="font-medium"> inicia sesión</span></nuxt-link>
            </div>
    </div>
</template>
<script setup>
    import { useAuthStore } from '@/stores/auth'
    const authStore = useAuthStore()
    const email = ref(authStore.email)

    const sendStoresData = () =>{
        authStore.saveEmail(email.value)
    }

</script>
<style lang="">
    
</style>