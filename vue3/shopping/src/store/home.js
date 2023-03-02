import { defineStore } from 'pinia'
// 每个路由级别组件都有独立的store 模块
import { getSwiperList } from '@/service/home.js'//, getVideosList
// 每个子仓库都是一个函数, use 开头, store结尾,  hooks
// 界面工程师
export const useHomeStore = defineStore('home', {
    state: () => ({
        // 响应式 
        swiperList: [],
        // videosList: []
    }),
    actions: {
        // 修改 也在store 里面 数据管理的闭环? 
        async getSwiperList() {
            const { result } = await getSwiperList();
            console.log(result);
            this.swiperList = result
        }
        // async getCategoryList() {
        //     const { result } = await getCategoryList();
        //     console.log(result);
        //     this.categoryList = result 
        // }
    }
})
