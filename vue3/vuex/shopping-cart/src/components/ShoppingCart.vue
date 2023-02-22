<template>
    <div class="cart">
        <h2>Your Cart</h2>
        <p v-show="!products.length">
            <i>请添加进购物车</i>
        </p>
        <ul>
            <li v-for="product in products" :key="product.id">
            {{ product.title }} - {{ product.price }} * {{ product.quantity }}
            </li>
        </ul>
        <p>Total: {{ total }}</p>
    </div>
</template>

<script setup>
import {useStore} from 'vuex';
import {computed} from 'vue';

const store = useStore()
// const items = computed(() => store.state.cart.items )
// console.log( store.state.cart.items );
const products = computed(() => store.getters['cart/cartProducts'])
const total = computed(() => store.getters['cart/cartTotalPrice'])
</script>

<style  scoped>

</style>