<template>
    <div>
        {{ count }}
        <button @click="add">add</button>
    </div>
</template>

<script setup>

// 1. count 来自中央
import { computed } from 'vue';
import { useStore } from '../store/gvuex.js';

const store = useStore()    // store来到组件  hooks函数
console.log(store);
const count =  computed(() => store.state.count) 
const add = () => {
    store.commit('add')
}

</script>

<style  scoped>

</style>