<template>
  <!-- 不要写的和原来产品一模一样  直接使用组件  简化 -->
  <van-swipe class="my-swiper" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in props.swiperList" :key="item.imgSrc" v-lazy="item" >
      <img :src="item.imgSrc" alt="" />
    </van-swipe-item>
  </van-swipe>

</template>

<script setup>
  const props = defineProps(['swiperList'])
</script>

<style lang="stylus" scoped>
.my-swiper
  img
    width 100%
</style>