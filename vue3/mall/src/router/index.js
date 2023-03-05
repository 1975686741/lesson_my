// 路由对象
// 路由类型的设置
// 数组的配置
// 路由的懒加载
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue'; // 页面级别组件 
// import Category from '../views/Category.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      {
        path: '/', // 根路径  login
        // http 状态码 3XX 跳转 浏览器
        redirect: '/home'  // 跳转 
      },
      {
        path: '/home',
        name: 'home',
        meta: {
            index: 1
        },
        component: Home
      },
      {
        path: '/category',
        name: 'category',
        meta: {
          index: 1
      },
        component: () => import('@/views/Category.vue')
      },
      {
        path: '/cart',
        name: 'cart',
        meta: {
          index: 1,
          isLogin: true
      },
        component: () => import('@/views/Cart.vue')
      },
      {
        path: '/user',
        name: 'user',
        meta: {
          index: 1,
          isLogin: true
      },
        component: () => import('@/views/User.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue')
      },
      { 
        // 动态路由   url params  ?id= queryString 
        path: '/detail/:id',
        name: 'detail',
        meta: {
          index: 3
      },
        component: () => import('@/views/Detail.vue')
      },
      {
        path: '/product-list',
        name: 'product-list',
        meta:{
            index: 2
        },
        component: () => import('@/views/ProductList.vue')
    },
    ]
})

export default router