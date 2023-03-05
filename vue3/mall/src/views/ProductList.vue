<template>
  <div>

  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()

onMounted(() => {
  const { from="" } = route.query
})
</script>

<style lang="stylus" scoped>

</style>