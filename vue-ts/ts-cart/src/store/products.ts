import { defineStore } from 'pinia'
import { reactive } from "vue";
import { getProducts, IProduct } from '../service/shop'



// 大型项目一定要有数据管理，  pinia是新一代的vuex  数据管理 + 界面开发
// 大型项目 ts 
// 函数式编程语法  消灭this
export const useProductsStore = defineStore('_products',() => {
    // let all : IProduct[] = reactive([])
    let state = reactive({
        all : [] as IProduct[]
    })
    const loadAllProducts = async () => {
        const ret = await getProducts() as IProduct[]
         state.all = ret
    }
    const decrementProduct = (product : IProduct) => {
        const curProduct = state.all.find(item => item.id === product.id)
        if (curProduct) {
            curProduct.inventory--
        }
    }
    return {
        state,
        loadAllProducts,
        decrementProduct
    }
})