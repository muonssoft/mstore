<template>
    <div class="flex flex-col justify-center items-center text-text gap-5 p-5 max-w-lg mx-auto w-full">
            <nuxt-link to="/">
                <img src="@/assets/logo.svg" alt="" class="max-h-[3rem] h-full w-full"></nuxt-link>
            <div class="flex flex-col text-center gap-2">
                <p class="font-semibold text-2xl text-center">Nos encanta volver a verte</p>
                <p class="text-center leading-none font-light">Por favor ingresa tus credenciales para acceder a este maravilloso mundo de soluciones.</p>
            </div>
            <div class="flex flex-col items-start gap-2 w-full">
                <label for="email" class="font-light">Email</label>
                <input @keyup="imprimir" v-model="email" type="email" id="email" class="bg-transparent min-w-[13rem] w-full placeholder:font-light px-5 py-2 border border-orangeMain rounded-xl" placeholder="Ingresa tu correo electrónico">
            </div>
            <div class="flex flex-col items-start gap-2 w-full">
                <label for="email" class="font-light">Contraseña</label>
                <input type="email" id="email" class="bg-transparent min-w-[13rem] w-full placeholder:font-light px-5 py-2 border border-orangeMain rounded-xl" placeholder="Ingresa tu contraseña">
            </div>
            <div class="w-full text-center gap-2 flex flex-col">
                <div class="text-text bg-orangeMain px-5 rounded-xl font-light w-full text-center py-2 cursor-pointer">Iniciar sesión</div>
                <nuxt-link to="/registro" class="underline font-light">¿No tienes cuenta? <span class="font-medium">Registrate</span></nuxt-link>
            </div>
    </div>
</template>
<script setup>
    import { useAuthStore } from '@/stores/auth'
    const authStore = useAuthStore()
    const email = ref(authStore.email)

    const imprimir = () =>{
        console.log(email.value);
    }

</script>
<style lang="">
    
</style>