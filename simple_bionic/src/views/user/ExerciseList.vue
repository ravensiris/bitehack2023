<script setup lang="ts">
import MainButton from "../../components/MainButton.vue";
</script>

<template>
  <main>
    <div class="flex justify-center items-center h-screen">
        <div class="flex flex-col space-y-12">
          <MainButton class="bg-yellow" to="/exercise/1">Zadanie 1</MainButton>
          <MainButton class="bg-green" to="/exercise/2">Zadanie 2</MainButton>
          <MainButton class="bg-purple" to="/exercise/3">Zadanie 3</MainButton>
      </div>
    </div>
  </main>
</template>