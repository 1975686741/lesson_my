<template>
    <div>
        ShopingCartzzzzz
    </div>
</template>

<script setup>
import {useStore} from 'vuex';
import {computed} from 'vue';

const store = useStore()
const items = computed(() => store.state.cart.items )
// console.log( store.state.cart.items );
</script>

<style  scoped>

</style>