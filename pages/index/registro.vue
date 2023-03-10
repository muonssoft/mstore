<template >
    <div class="w-full overflow-y-auto p-10">
        <div class="flex flex-col justify-center items-center text-text gap-5 p-5 max-w-lg w-full mx-auto">
            <nuxt-link to="/">
                <img src="@/assets/logo.svg" alt="" class="max-h-[3rem] h-full w-full"></nuxt-link>
            <div class="flex flex-col text-center gap-2">
                <p class="font-semibold text-2xl text-center">¡Hola!, un gusto tenerte aquí</p>
                <p class="text-center leading-none font-light">Por favor ingresa tus datos para crear una cuenta en este maravilloso mundo de soluciones.</p>
            </div>
            <div class="flex flex-col items-start gap-2 w-full">
                <label for="email" class="font-light">Email</label>
                <input v-model="email" type="email" id="email" class="bg-transparent min-w-[13rem] w-full placeholder:font-light px-5 py-2 border border-orangeMain rounded-xl" placeholder="Ingresa tu correo electrónico">
            </div>
            <div class="flex flex-col items-start gap-2 w-full">
                <label for="names" class="font-light">Nombres</label>
                <input v-model="names" type="text" id="names" class="bg-transparent min-w-[13rem] w-full placeholder:font-light px-5 py-2 border border-orangeMain rounded-xl" placeholder="Ingresa tu correo electrónico">
            </div>
            <div class="flex flex-col items-start gap-2 w-full">
                <label for="lastNames" class="font-light">Apellidos</label>
                <input v-model="lastNames" type="text" id="lastNames" class="bg-transparent min-w-[13rem] w-full placeholder:font-light px-5 py-2 border border-orangeMain rounded-xl" placeholder="Ingresa tu correo electrónico">
            </div>
            <div class="flex flex-col items-start gap-2 w-full">
                <label for="number" class="font-light">Número de contacto</label>
                <input v-model="contactNumber" type="number" id="number" class="bg-transparent min-w-[13rem] w-full placeholder:font-light px-5 py-2 border border-orangeMain rounded-xl" placeholder="Ingresa tu correo electrónico">
            </div>
            <div class="flex flex-col items-start gap-2 w-full">
                <label for="password" class="font-light">Contraseña</label>
                <input v-model="password" type="password" id="password" class="bg-transparent min-w-[13rem] w-full placeholder:font-light px-5 py-2 border border-orangeMain rounded-xl" placeholder="Ingresa tu contraseña">
            </div>
            <div class="flex flex-col items-start gap-2 w-full">
                <label for="confirmPassword" class="font-light">Confirma tu contraseña</label>
                <input v-model="confirmPassword" type="password" id="confirmPassword" class="bg-transparent min-w-[13rem] w-full placeholder:font-light px-5 py-2 border border-orangeMain rounded-xl" placeholder="Ingresa tu contraseña">
            </div>
            <div class="w-full text-center gap-2 flex flex-col">
                <button @click="registerUser" class="text-text bg-orangeMain px-5 rounded-xl font-light w-full text-center py-2 cursor-pointer">Registrate</button>
                <nuxt-link to="/auth" class="underline font-light">Ya tienes cuenta? <span class="font-medium">Iniciar sesión</span></nuxt-link>
            </div>
    </div>
    <div v-if="user" class="fixed flex items-center gap-5 top-5 right-5 px-5 py-3 bg-white rounded-xl text-text font-light shadow-lg">
            <i class="fi fi-rr-exclamation flex justify-center items-center"></i>
            Ya tienes cuenta iniciada, serás redirigido a tu dashboard
            <nuxt-link to="/dashboard" class="flex items-center gap-2 bg-orangeMain text-text px-3 py-2 rounded-md">Ir al dashboard <i class="fi fi-rr-arrow-small-right flex justify-center items-center"></i></nuxt-link>
        </div>
    </div>
</template>
<script setup>
import { useAuthStore } from '@/stores/auth'
const router = useRouter()
const user =useSupabaseUser()
const supabase = useSupabaseClient()
const authStore = useAuthStore()
const email = ref("")
const names = ref("")
const lastNames = ref("")
const contactNumber = ref("")
const password = ref("")
const confirmPassword = ref("")
let emailStore = authStore.email


onMounted(() => {
    if(emailStore != ""){
        email.value = emailStore
    }
})


async function registerUser () {
    console.log(email.value, password.value);
    if(password.value === confirmPassword.value){
        const { data, error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
        })
        await createUser(data.user.id)
    }
}

async function createUser(id){
    const { error } = await supabase
        .from('profile')
        .insert(
            { 
                id: id,
                names: names.value,
                last_names: lastNames.value,
                contact_number: contactNumber.value
            }
        )
    if(!error){
        router.push("/dashboard")
    }else{
        console.log(error)
    }
}


</script>
<style scoped>
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
    }
    input[type=number] { -moz-appearance:textfield; }
</style>