<script setup lang="ts">
import { computed } from 'vue'
import { GlobalDataProps } from './types'
import { getColumn } from "./api/column";
import GlobalHeader from './components/GlobalHeader.vue'
import { useStore } from 'vuex'  // hooks  函数式编程  
// pinia hooks更好 defineStore     vuex 对ts支持不如pinia
// ref reactive 私有状态
// computed  store.state
const store = useStore<GlobalDataProps>()
const currentUser = computed(() => store.state.user)
getColumn()
    .then(data => {
        console.log(data);
    })
</script>

<template>
    
    <div class="constainer-fluid px-0 flex-shrink-0">
        <global-header :user="currentUser" />
    </div>

<router-view></router-view>

</template>

<style scoped>

</style>
