<script setup lang="ts">
import MainButton from "../components/MainButton.vue";
</script>

<template>
  <main>
    <div class="flex justify-center items-center h-screen">
        <div class="flex flex-col space-y-12">
          <MainButton class="bg-coffee">Zadania</MainButton>
          <MainButton class="bg-coffee-milk">Wgraj tekst</MainButton>
          <MainButton class="bg-dark-gray">Wyjdź</MainButton>
      </div>
    </div>
  </main>
</template>
