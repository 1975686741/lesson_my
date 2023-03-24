<script setup>
import { ref, onMounted, nextTick } from 'vue'

let count = ref(0)
// event loop 里的时间  微任务
onMounted(() => {
  count.value++     //1  在内存里是同步的  =》 DOM更新是异步的（微任务）    异步的  
  count.value++  // 多次更新 合并任务
  // promise 封装DOM 更新任务
  // promise 下一次DOM 更新完才会触发
  nextTick(() => {  // 在下次 DOM 更新循环结束之后执行延迟回调
    console.log(document.querySelector('.count').innerText);  // 2
  })

})
</script>

<template>
  <div class="count">{{ count }}</div>


  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive" />
    </keep-alive>
    <component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive" />
  </router-view>
</template>

<style scoped></style>
