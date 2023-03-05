<script setup>
// Vue 渐进式的开发框架
const props = defineProps({
  list: {
    type: Array,
    value: []
  }
})
</script>

<template>
   <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#1baeae">
      <van-swipe-item v-for="(item, index) in list" :key="index">
          <img :src="item.carouselUrl" alt="">
      </van-swipe-item>
   </van-swipe>
</template>

<style lang="stylus" scoped>
.my-swipe
    // top 1.33333rem
    img
        width 100%
        height 100%
        // margin 1.3333rem 0 0 0
</style>