// - pinia 区别于vuex  形式更简洁
// 原来的modules 取而代之 defineStore
import { defineStore } from 'pinia';

// 取名 use开头     类似于hooks
// 一个模块就是一个defineStore函数
export const useCartStore = defineStore({
    id: 'cart',  // 名字
    state: () => ({  // 只读对象
        rawItems: []
    }),
    getters: {
        items: (state) => state.rawItems.reduce((items, item) => {
            const existingItem = items.find(it => it.name === item)
            if (!existingItem) {
                items.push({ name: item, amount: 1 })
            } else {
                existingItem.amount++;
            }
            return items
        }, [])
    },
    actions: {
        addItem(name) {
            this.rawItems.push(name)
        },
        async purchaseItems() {

        },
        removeItem(name) {
            const i = this.rawItems.lastIndexOf(name)
            if (i > -1) {
                this.rawItems.splice(i, 1)
            }
        }
    }
})