<template>
  <child class="child-class" style="background:green;" :msg1="msg1" :msg2="msg2" title="3333"></child> 
</template>

<script setup>
import Child from './Child.vue'
import { ref } from "vue"
const msg1 = ref("1111")
const msg2 = ref("2222")
</script>