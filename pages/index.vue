<template>
    <div class="w-full h-screen grid grid-cols-2 p-5 bg-yellowMain bg-opacity-20 gap-5">
        <div class="w-full h-full p-5 bg-white rounded-3xl  flex items-center justify-center">
            <img src="@/assets/nave.gif" alt="" class="w-full object-contain">
        </div>
        <div class="flex flex-col justify-center items-center text-text gap-10 p-5">
            <img src="@/assets/logo.svg" alt="" class="max-h-[3rem] ">
                <div class="flex justify-center items-center flex-col gap-1">
                    <p class="font-light text-xl leading-none">Estamos en construcción</p>
                    <p class="font-light text-2xl leading-none">pero algo espéctacular se aproxima</p>
                    <p class="font-bold text-6xl leading-none mt-3">¡Espéranos!</p>
                </div>
            <div class="flex items-center justify-center flex-col gap-2">
                <nuxt-link to="/register" class="text-text bg-orangeMain px-10 rounded-xl font-light text-xl w-full text-center py-2">Registrate</nuxt-link>
                <nuxt-link to="/auth" class="text-text px-5 py-1 underline font-light">Si ya tienes cuenta,<span class="font-medium"> inicia sesión</span></nuxt-link>
            </div>
        </div>


        <!-- <div v-for="item in 10 " :key="item">
            <OrganinsmsCardItem :info="info" @recibido="recibido"/>
        </div> -->
    </div>
</template>

<script setup>
    
/*     const info = ref({
        id: 0,
        name: "Hola mundo",
        lastName: "perros"
    })

    const recibido = (id) =>{
        console.log(id);
    } */
    
</script>

<style>
.page-enter-active,
.page-leave-active {
transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
opacity: 0;
filter: blur(1rem);
}

.fondo{
  z-index: -100;
}
</style>

