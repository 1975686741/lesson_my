import { ref, inject } from "vue"
import RouterLink from './RouterLink.vue'
import RouterView from './RouterView.vue'

// 让router对象如何跨页面 跨组件可以访问到
const ROUTER_KEY = '__router__'  // 查找router对象的key
// options  routes  history
// 返回一个路由对象
// app.use(router) 挂载到App上   router-link  router-view 组件生效
const createRouter = (options) => {
    return new Router(options)
}

const useRouter = () => {
    return inject(ROUTER_KEY);
}

const createWebHashHistory = () => {
    function bindEvents(fn) {
        window.addEventListener('hashchange', fn)
    }
    return {
        bindEvents,
        url: 'window.location.hash.slice(1)'  // 默认首页，从指定的链接进去
    }
}

class Router{
    constructor(options) {
        this.history = options.history   // hash or history
        this.routes = options.routes // 路由的配置数组
        this.current = ref(this.history.url)  // 响应式的当前路由   修改它，自动更新
        this.history.bindEvents(() => {
            this.current.value = window.location.hash.slice(1)  
        })
    }
    install(app) {
        app.provide(ROUTER_KEY, this)  // 路由对象，提供给全局访问
        app.component('router-link', RouterLink);  // 挂载全局组件
        app.component('router-view', RouterView)
    }
}

export {
    createRouter,   // 返回路由实例
    createWebHashHistory, // 返回hash 事件监听
    useRouter    
}