<script setup>
</script>

<template>
    <router-view v-slot="{ Component }">
    <!-- 回到上次浏览位置 -->
    <keep-alive>
      <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive" />
    </keep-alive>
    <component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive" />
  </router-view>
</template>

<style>
</style>
