<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isContentShown = ref<boolean>(false)
const open = () => {
    isContentShown.value = true
}

defineExpose({
    open
})
</script>

<style scoped>

</style>