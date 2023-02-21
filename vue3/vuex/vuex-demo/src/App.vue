<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore() // provide + inject 
// 
// const count = ref(store.state.count)  私有状态
let count = computed(() => store.state.count) //响应式归中央管  来到本地依然是数据状态
// let count = store.state.count  // 从中央到组件  响应式的
// console.log(count);
// count++  不能乱加  count 会 NAN
const addCount = () => {
  store.commit('add')
}
</script>
<template>
  <!-- <div>
    {{$store.state.count}}  第一种写法
  </div> -->
  <div>
    {{ $store.state.count }}
    {{ count }}
  </div>

  <!-- <button @click="$store.commit('add')">加1</button>   -->
  <button @click="addCount">加1</button> 
</template>

<style scoped></style>
