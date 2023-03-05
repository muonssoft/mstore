<template>
    <div class="w-full h-screen grid grid-cols-2 bg-yellowMain bg-opacity-20 gap-5">
        <div class="p-5">
            <div class="w-full h-full p-5 bg-white rounded-3xl  flex items-center justify-center">
                <img src="@/assets/nave.gif" alt="" class="w-full object-contain">
            </div>
        </div>
        <NuxtPage/>
        <!-- <div v-for="item in 10 " :key="item">
            <OrganinsmsCardItem :info="info" @recibido="recibido"/>
        </div> -->
    </div>
</template>

<script setup>

    const supabase = useSupabaseClient()

    onBeforeMount(() => {
        getProfile()
    })

    const getProfile = async () =>{
        const { data, error } = await supabase
        .from('profile')
        .select()
        console.log(data)
    }

    supabase.auth.onAuthStateChange((event, session) => {
        console.log(event, session)
    })


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
    
</style>
