<template>
    <header class="simple-header">
        <van-icon name="arrow-left" @click="goBack" />
    </header>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
        value: ''
    }
})

</script>

<style lang="stylus" scoped>

</style>