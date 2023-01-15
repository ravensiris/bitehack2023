<script setup lang="ts">
import { useSlots } from 'vue'

const bionicizeText = (text: String) => {
    const words = text.split(" ").map((word) => {
        const middle = Math.floor(word.length / 2);
        const first_half = word.slice(0, middle);
        const second_half = word.slice(middle);
        return `<b>${first_half}</b>${second_half}`
    })
    return words.join(" ")
};

const slots = useSlots()
const text = slots.default!().map((elem) => elem.children).join(" ")
const bionicText = bionicizeText(text)

</script>

<template>
<span v-html="bionicText" class="font-normal"></span>
</template>