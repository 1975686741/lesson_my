<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface Book {
    title: string
    year?: number
}
const book:Book = reactive({title: 'vue3'})


</script>

<style scoped>

</style>