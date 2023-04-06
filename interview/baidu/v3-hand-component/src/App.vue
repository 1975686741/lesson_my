<script setup>
import Input from './components/Input.vue'
import { ref } from 'vue'

const tel = ref('')
// 组件通信
// tel 和 Input 组件  双向绑定 
// 父子组件props单向  props->  子组件emit input标签传回来 修改tel
setTimeout(() => {
  tel.value = '13888888888'
});
</script>

<template>
  {{ tel }}
<!-- <Input :modelValue="tel" @update:modelValue="tel=$event" /> -->
<Input v-model="tel" :disabled="true" placeholder="请输入手机号" />

</template>

<style scoped>

</style>
