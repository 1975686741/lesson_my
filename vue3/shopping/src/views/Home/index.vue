<template>
  <div>
    <!-- 一屏半左右 -->
    <!-- 头部组件 -->
    <AppHeader/>
    <!-- 频道组件 -->
    <HomeChannel/>
    <!-- 轮播图 -->
    <HomeSwipe :swiperList="swiperList"/>
    <!-- 视频组件 容器组件-->
    <!-- <HomeVideoList/> -->
    <nav-bar/>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import HomeChannel from '@/components/HomeChannel.vue'
import HomeSwipe from '@/components/HomeSwipe.vue'
import NavBar from '@/components/NavBar.vue'
// import HomeCategoryList from '@/components/HomeCategoryList.vue'
import axios from 'axios'
import { useProductsStore } from '@/store/products.js'
import { useHomeStore } from '@/store/home.js'
// vuex 区别 只是products 模块
const productsStore = useProductsStore(); // 本地到中央的联系
const products = computed(() => productsStore.all)

const homeStore = useHomeStore(); // 本地到中央的联系
const swiperList = computed(() => homeStore.swiperList)
// const videosList = computed(() => homeStore.categoryList)
onMounted(async () => {
    await productsStore.loadAllProducts()
    console.log(productsStore.all);
    await homeStore.getSwiperList()
    console.log(homeStore.swiperList,'111');
    // await homeStore.getCategoryList()
    // console.log(homeStore.categoryList,'2222');
})

// onMounted(() => {
//   fetch('/swiperList')
//     // .then(response => response.json())
//     .then(data => {
//       console.log(data);
//     })
// })
// // onMounted(() => {
// //   axios({
// //     url: '/swiperList',
// //     method: 'get'
// //   })
// //   .then((res) => console.log(res))

// //   axios({
// //     url: '/videosList',
// //     method: 'get'
// //   })
// //   .then((res) => console.log(res))
// // })
</script>

<style scoped>

</style>