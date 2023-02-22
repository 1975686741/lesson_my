<template>
    <div>
        clicked: {{ count }} times, count is {{ evenOrOdd }}
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex';

const store = useStore()
const count = computed(() => store.state.count)
const evenOrOdd = computed(() => store.state.evenOrOdd)
const increment = () => store.dispatch('increment')
const decrement = () => store.dispatch('decrement')
</script>

<style  scoped>

</style>