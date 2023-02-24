<template>
  <div>
      <!-- 一屏半左右 -->
      <!-- 头部组件 -->
     <AppHeader/>
     <!-- 频道组件 -->
     <!-- <HomeChannel/> -->
     <!-- 轮播图 -->
     <HomeSwipe :swiperList="swiperList"/>
     <!-- 视频组件  容器组件  -->
     <!-- <HomeVideoList/>  -->
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
// 本地组件以后基本不发送请求
// import { getSwiperList, getVideosList } from '@/service/home.js' 
import AppHeader from '@/components/AppHeader.vue'
// import HomeChannel from '@/components/HomeChannel.vue'
import HomeSwipe from '@/components/HomeSwipe.vue'
// import HomeVideoList from '@/components/HomeVideoList.vue'
import { computed } from 'vue'
import axios from 'axios'
import { useProductsStore } from '@/store/products.js'
import { useHomeStore } from '@/store/home.js'

// vuex 区别 只是products 模块
const store = useProductsStore();  // 本地到中央的联系
const products = computed(() => store.all)
const homeStore = useHomeStore();
const swiperList = computed(() => homeStore.swiperList) // template 绑定
const videosList = computed(() => homeStore.videosList) 
console.log(swiperList, videosList)


onMounted(async () => {
  await store.loadAllProducts() // actions 函数就是交给声明周期调用的
  console.log(store.all, '/////');
  await homeStore.getSwiperList();
  await homeStore.getVideosList();
})
</script>

<style  scoped>

</style>