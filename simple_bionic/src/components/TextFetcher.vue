<script setup lang="ts">
import BionicText from "./BionicText.vue";
import {computed, reactive} from "vue"

const props = defineProps({
  page: {type: Number, default: 0},
  words: {type: Number, default: 70},
  start: {type: Number, default: 1500}

})

const result = await fetch('/public/zarathustra.txt')
const text = (await result.text()).split(" ")
const paginatedText = reactive({text: text.slice(props.start + props.page*props.words, props.start + props.words + props.page*props.words).join(" ")})
</script>

<template>
    <BionicText class="text-5xl leading-relaxed">
        {{ paginatedText.text }}
    </BionicText>
</template>