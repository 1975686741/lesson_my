<template>
  <div>
    User
    <nav-bar></nav-bar>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import NavBar from '@/components/NavBar.vue'
import { useUserStore } from '@/store/user.js';
import { useRouter } from 'vue-router';

const user = useUserStore();
// console.log(user.isLogin,'///');

const router = useRouter()

onMounted(() => {
  if (!user.isLogin) {
    router.push({
        path: '/login'
    })
  }
})

</script>

<style lang="stylus" scoped>

</style>