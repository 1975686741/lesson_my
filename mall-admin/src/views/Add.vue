<template>
    <div>
        {{ profile.loginUserName }} {{ profile.nickName }}
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useUserStore } from '@/store/user.js'
// 如何从中央取profile 到页面组件？ 
const  userStore = useUserStore(); // useRouter hooks 
console.log(userStore.profile.loginUserName, '用户登录名拿到了')

const profile = computed(() => userStore.profile  )
console.log(profile, 'profile拿到了');

// export default {
//     setup () {
        

//         return {}
//     }
// }
</script>

<style lang="stylus" scoped>

</style>