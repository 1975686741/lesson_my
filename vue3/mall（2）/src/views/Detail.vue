<template>
    <div>
        
    </div>
</template>

<script setup>
import { onMounted,reactive } from 'vue'
import { useRoute } from 'vue-router'
import { getDetail } from '@/service/detail'
// router 是所有的route的集合

const route = useRoute()   // 当前路由
const state = reactive({
    detail : {}
})
onMounted(async () => {
    const { id } = route.params
    const { data } = await getDetail(id) // 异步
    state.detail = data
})
</script>

<style lang="stylus" scoped>

</style>