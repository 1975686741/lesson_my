// index.js  => index.ts
// typescript = js + 强类型   js超集

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history : createWebHistory(),
    // 每个路由的配置 满足RouteRecordRaw类型的约束
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        }
    ]  as RouteRecordRaw[]
})

// 路由管理对象
export default router