// import {
//     createRouter,
//     createWebHashHistory
// } from 'vue-router'

import {
    createRouter,
    createWebHashHistory
} from './grouter/index.js'

import Home from '../views/Home.vue'
import About from '../views/About.vue'

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
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router