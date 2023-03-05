<template>
  <div class="text-text">
      {{info.name}}, {{info.lastName}}
    <button @click="$emit('recibido', 0)">pulsame perra</button>
  </div>
</template>

<script setup>

const props = defineProps({
  info:{
    name:String,
    lastName: String
  }
})


</script>