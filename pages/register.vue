<template >
    <div>
        <p>{{email}}</p>
    </div>
</template>
<script setup>
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()

const email = authStore.email


</script>
<style lang="">
    
</style>