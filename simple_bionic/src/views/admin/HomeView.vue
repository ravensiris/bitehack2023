<script setup lang="ts">
import MainButton from "../../components/MainButton.vue";
</script>

<template>
  <header class="flex items-center bg-[#D9D9D9] h-20 w-screen mb-16">
    <a href="#" class="flex px-8 bg-[#EEEEEE] h-full items-center"><span class="text-5xl">Menu</span> <img class="mx-8 h-6 w-auto inline" src="../../assets/chevron-up.svg" alt="Arrow up"></a>
    <a href="#" class="flex px-8 h-full items-center">
      <span class="text-5xl">Simple Read</span>
    </a>
  </header>
  <main class="h-100">
    <div class="flex justify-center items-center">
        <div class="flex flex-col space-y-12">
          <div class="flex items-center justify-center mb-10">
            <img class="static rounded-3xl shadow-lg" src="../../assets/logo-big.svg" alt="App logo's gradient"/>
            <span class="absolute text-8xl">A</span>
          </div>
          <MainButton class="bg-lighter-gray capitalize" to="/about">Moi podopieczni</MainButton>
          <MainButton class="bg-lighter-gray capitalize" to="/about">Zadania</MainButton>
      </div>
    </div>
  </main>
</template>
