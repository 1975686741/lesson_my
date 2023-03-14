import VueRouter from "vue-router";
import goods from '../views/goods/goods.vue'

const routes = [{
    path: '/',
    // redirect: '/goods'
    component : goods
},{
    path: '/goods',
    component: goods
}]

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes,
})


export default router