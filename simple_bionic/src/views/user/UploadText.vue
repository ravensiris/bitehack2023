<script setup lang="ts">
</script>

<template>

   <RouterLink to="/" class="px-8 py-4 text-3xl rounded-xl m-8 fixed shadow-md bg-[white] flex items-center w-min"> 
   WRÓĆ 
  </RouterLink>
    <main>
        <div class="">

    <div class="flex justify-center items-center h-screen">
        <div class="flex flex-col space-y-12">

            <div class="bg-[white] py-12 px-32 rounded-xl shadow-lg">
                <img class="mx-auto mb-8" src="../../assets/huge-arrow-down.svg" alt="Arrow down" />
                <div class="text-4xl flex flex-col leading-normal">
                    Przeciągnij plik z tekstem
                    <br>
                   <span class="mx-auto">TUTAJ</span> 
                </div>
            </div>
            <span class="text-4xl mx-auto">LUB</span> 
            <button class="text-4xl rounded-lg bg-coffee py-6">Wybierz plik z dysku</button>
        </div>
    </div>
        </div>
    </main>
</template>