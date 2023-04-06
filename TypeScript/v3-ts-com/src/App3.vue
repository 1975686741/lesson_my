<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 第二种方式
// import type { Ref } from 'vue';
// 静态类型约束
// const year : Ref<string | number | boolean> = ref(2023)

// 泛型约束
const year = ref<string | number>(2023)
// ref 响应式声明，类型推导 Ref<number>
year.value = 2001
year.value = "2001"
// year.value = false
</script>

<style scoped>

</style>