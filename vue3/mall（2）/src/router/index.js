// 路由对象
// 路由类型的设置
// 数组的配置
// 路由的懒加载
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue' // 页面级别组件  路径 ../ 相对

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',   // 根路径   login 
            // http 状态码  302 跳转 浏览器 
            redirect: '/home'  // 跳转
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                keepAlive: true,          
            }
        },
        {
            path: '/category',
            name: 'category',
            component: () => import('@/views/Category.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('@/views/Cart.vue')
        },
        {
            path: '/user',
            name: 'user',
            component: () => import('@/views/User.vue')
        },
        {
            // 动态路由
            path: '/detail/:id',
            name: 'detail',
            component: () => import('@/views/Detail.vue')
        }
    ]
})

export default router