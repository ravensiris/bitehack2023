<script setup lang="ts">
import TextFetcher from "../../components/TextFetcher.vue";
import {ref} from "vue"

const page = ref(0)
const next = () => {
    page.value += 1
}
const prev = () => {
    if (page.value < 1) return;
    page.value -= 1
}

window.addEventListener('keyup', function(e) {
    const move = e.key == "ArrowLeft" ? -1 : 1;
    page.value += move
});
</script>

<template>

   <RouterLink to="/exercise" class="px-8 py-4 text-3xl rounded-xl m-8 fixed shadow-md bg-[white] flex items-center w-min"> 
   WRÓĆ 
  </RouterLink>
    <main class="w-screen h-screen flex">
        <div class="w-[92vw] h-[78vh] m-auto">
            <div class="w-full h-full bg-[#D9D9D9] p-20">
                <a href="#" :onclick="prev" class="absolute top-1/2 -translate-y-1/2 left-4">
                    <img class="w-32 h-32" src="../../assets/arrow-left.svg" alt="Previous page" />
                </a>
                <div class="overflow-hidden">
                    <Suspense :key="page">
                        <TextFetcher :page="page" :words="100"></TextFetcher>
                        <template #fallback>
                        </template>
                    </Suspense>
                </div>
                <a href="#" :onclick="next" class="absolute top-1/2 -translate-y-1/2 right-4">
                    <img class="w-32 h-32"  src="../../assets/arrow-right.svg" alt="Next page" />
                </a>
            </div>
        </div>
    </main>
</template>