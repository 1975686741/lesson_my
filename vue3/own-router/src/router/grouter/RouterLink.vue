<template>
    <a :href="'#' + props.to">
        <slot />
    </a>
</template>

<script setup>
import { defineProps } from 'vue';

let props = defineProps({
    to: {
        typr: String,
        required: true
    }
})
</script>

<style scoped>

</style>