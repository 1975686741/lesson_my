// 路由的配置页面
import { 
    createRouter,  //创建路由
    createWebHistory, // history api   /   html5 缺点是兼容性
    createWebHashHistory // 路由的形式  hash  兼容
} from 'vue-router'

import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Posts from '../pages/posts.vue'

// 配置 页面和url 的关系
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/posts',
        name: 'Posts',
        component: Posts
    }
]
// vue + vue-router
const router = createRouter({
    history: createWebHistory(), // 路由形式
    routes // 配置数组
})

export default router