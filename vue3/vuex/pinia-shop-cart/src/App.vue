<template>
  <Layout>
    <div style="margin:1rem 0">
      <PiniaLogo/>
    </div>
    <!-- // 私有状态？X   store user模块  name属性-->
    <h2>Hello {{ user.name }}</h2>
    <form  @submit.prevent="addItemToCart">
    <input type="text"  v-model="itemName">
    <button type="submit">Add</button>
    </form>
    <form @submit.prevent="buy" action="">
      <ul>
        <li v-for="item in cart.items" :key="item.name">
          {{item.name}}  {{item.amount}}  
          <button  type="button" @click="cart.removeItem(item.name)">-</button>
        </li>
      </ul>
    </form>
  </Layout>
</template>

<script setup>
import { ref } from 'vue';
import Layout from './layouts/default.vue';
import PiniaLogo from './components/PiniaLogo.vue';
// 共享状态来到组件  都使用hooks函数
// import { useStore } from 'vuex'  root store
import { useUserStore } from './store/user.js';  // user 模块
import { useCartStore } from './store/cart.js'; 
// vuex写法
// const user = useUserStore()
// store.state.user.name    

const user = useUserStore()
const cart = useCartStore()

// 私有状态
const itemName = ref('')
const addItemToCart = () => {
  if (!itemName.value) return
  cart.addItem(itemName.value)
  itemName.value = ''
}

const buy = () => {

}
</script>


<style scoped>

</style>
