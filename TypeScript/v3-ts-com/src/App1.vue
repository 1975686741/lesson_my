<script setup lang="ts">
// composition API 常用  ref reactive watch props emit computed
// 对props的静态类型约束？
// 运行时声明 
// const props = defineProps({
//   foo: {type: String, required: true},
//   bar: Number
// })

// defineProps 宏函数 不需要引入 全局可以使用
interface Props {
  foo: string;
  bar?: number
}
const props = withDefaults(defineProps<Props>(), {
  foo: 'hello',
  bar: 11
}) 

</script>

<template>

</template>

<style scoped>

</style>
