<template>
    <div>
        index
      <OrganinsmsCardItem title="hola"/>
      <OrganinsmsCardItem :title="'hola2'"/>
      <OrganinsmsCardItem :title="data.title"/>
      
     
    </div>
</template>

<script setup>
    const data={
        title:"Hola otra vez"
    }
    
</script>

