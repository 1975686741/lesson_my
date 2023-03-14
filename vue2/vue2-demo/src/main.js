// vue2.0  会看文档
import Vue from 'vue'  //vue2 初始化项目
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'
Vue.use(VueRouter)  // 给vue添加路由模块
import './assets/stylus/index.styl'

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

