<script setup lang="ts">
import MainButton from "../../components/MainButton.vue";
</script>

<template>

   <RouterLink to="/" class="px-8 py-4  text-3xl rounded-xl m-8 fixed shadow-md bg-[white] flex items-center w-min"> 
   WRÓĆ 
  </RouterLink>
  <main>
    <div class="flex justify-center items-center h-screen">
        <div class="flex flex-col space-y-12">
          <MainButton class="bg-blue" to="/exercise/1">Potęgowanie zadania</MainButton>
          <MainButton class="bg-purple" to="/exercise/2">Tekst o pszczołach</MainButton>
          <MainButton class="bg-yellow" to="/exercise/3">Starożytni bogowie</MainButton>
          <MainButton class="bg-green" to="/exercise/4">Bezkręgowce</MainButton>
          <MainButton class="bg-purple" to="/exercise/5">Rozpoznanie emocji</MainButton>
      </div>
    </div>
  </main>
</template>