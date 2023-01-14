<script setup lang="ts">
defineProps({
  to: String
})
</script>

<template>
  <RouterLink
    class="flex w-100 justify-center px-20 py-10 bg-slate-700 rounded-xl text-6xl uppercase"
    :to="to"
  >
    <slot></slot>
  </RouterLink>
</template>
