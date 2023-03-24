import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import List from '../views/List.vue'

const routes = [
    {
        path: '/', 
        component: Home,
        name: 'home'

    },
    {
        path: '/list',
        component: () => import('../views/List.vue'),
        name: 'name'
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    // 自动设置相应页面的滚动条
    scrollBehavior(to, from) {
        if (to.name === 'list') { // 分页面对待
            return {
                top: parseInt(localStorage.getItem('scoll'))
            }
        }
    }
})

export default router