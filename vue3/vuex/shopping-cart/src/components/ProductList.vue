<template>
    <div>
        ProductList
    </div>
</template>

<script setup>
// 接口 请求 数据  -》 [] -》   数据不归组件管理
// 共享状态， 管他什么组件 数据管理独立于组件之外....
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
console.log(store.state.products.all)

</script>

<style scoped>

</style>