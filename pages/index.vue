<template>
    <div>
        <OrganinsmsCardItem age="12" @submit="subscribeUser" />
    </div>
</template>

<script setup>
    function subscribeUser() {
        console.log("form submitted! do something");
    }
</script>
