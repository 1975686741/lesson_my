<template>
    <div>

    </div>
</template>

<script setup lang="ts">
// const emit = defineEmits(['change', 'update'])
const emit = defineEmits<{
    (e: 'change', id: number): void
    (e: 'updata', value: string): void
}>()
emit('change', 123)
emit('updata', 'CiCi')
</script>

<style scoped>

</style>