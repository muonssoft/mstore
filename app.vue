<template>
    <div class="h-auto w-full">
        <NuxtPage/>
    </div>
</template>
<script setup>

</script>
<style>

input:focus{
    box-shadow: none;
    outline: none;
}

input:focus-visible{
    box-shadow: none;
    outline: none;
}

textarea:focus{
    box-shadow: none;
    outline: none;
}

textarea:focus-visible{
    box-shadow: none;
    outline: none;
}

select:focus{
    box-shadow: none;
    outline: none;
}

select:focus-visible{
    box-shadow: none;
    outline: none;
}

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
