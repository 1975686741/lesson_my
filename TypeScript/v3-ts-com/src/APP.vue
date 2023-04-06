<template>
    <div>
        <MyModel ref="model" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MyModel from './MyModel.vue'

const model = ref<InstanceType<typeof MyModel> | null>(null)

onMounted(() => {
    model.value?.open()
})
</script>

<style scoped>

</style>