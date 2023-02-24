import { defineStore } from 'pinia';    // 创建一个子仓库
import { getProducts } from '@/service/shop.js';    // alias 架构

export const useProductsStore = defineStore('products', {
    state: () => {  // 中央状态
        return {
            all: []
        }
    },
    actions: {    // 接管数据请求
        // 走向接口
        async loadAllProducts() {
            const res = await getProducts()
            // console.log(res);
            this.all =  res.result
        }
    }
})

