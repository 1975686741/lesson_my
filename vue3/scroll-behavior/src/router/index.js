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
        name: 'name',
        meta: {
            keepAlive: true,          
        }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    
})

export default router