<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#FF0000">
        <van-swipe-item v-for="(item, index) in list" :key="index">
            <img :src="item.carouselUrl" alt=""/>
        </van-swipe-item>
    </van-swipe>
</template>

<script setup>
// Vue 渐进式的开发框架
const props = defineProps({
    list: {
        type: Array,
        value: []
    }
})
</script>

<style lang="stylus" scoped>
.my-swipe
    width 50%
    height 100%
    img
        width 100%
        height 100%
        display block
        border-radius 10%
</style>