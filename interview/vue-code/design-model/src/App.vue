<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)
const showModal = () => {
  show.value = true
}
</script>

<template>
<div>
  <!-- R name defineComponentName 全局 -->
  <button @click="showModal">显示modal</button>
  <RModal v-model="show">
    <div>这是一个Modal</div>
  </RModal>
</div>
</template>

<style scoped>

</style>
