<template>
    <div>
        <h1>首页</h1>
        <div>我在掘金找前端全栈</div>
        <div @click="router.push({path: '/about'})"></div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style scoped>

</style>