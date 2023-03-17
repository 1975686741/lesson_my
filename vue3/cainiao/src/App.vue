<script setup>
import { ref,onMounted } from 'vue'
import HorizenScrollMenu from './components/HorizenScrollMenu.vue'
import BackTop from './components/BackTop.vue'

const showHeight = ref(0)
onMounted(() => {
  showHeight.value = window.innerHeight
})
</script>
 
<template>
  <horizen-scroll-menu />


  
  <back-top :showHeight="showHeight">
    回到顶部
  </back-top>
  <div style="height: 3000px;">
    
  </div>
</template>

<style lang="stylus" scoped>
*
  margin 0
  padding 0

</style>
