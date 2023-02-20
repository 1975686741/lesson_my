# 手写 vue-router

    1. vue-router ? 类  模块  
        ` `import {
              createRouter,
              createWebHashHistory
            } from 'vue-router'   
         `  
        createRouter 方法 options  
        createWebHashHistory  事件的监听  hashChange事件
    2. 匹配的组件
       1. 如何放到 router-view 组件内部  slot
    3. router-link  router-view 组件  
        vue.component()
    4. 怎么样让vue-router 支持 vue.use()

- app.use(router)
    1. 什么是router?  
        vue生态的代表   vue-router vuex ELement-plus  vant  
        vue只负责响应式和组件化等核心能力，其他的交给周边生态  
        嫁接的入口  vue  主动去调用 install 方法
    2. install
       1. 声明 router-link router-view 两个全局组件

-  <component :is="component"/>
    1. 组件占位
    2. 动态绑定

- 组件通信的API
     1. app.provide(KEY, component)  跨组件共享  全局对象  useRouter() useStore()
     2. inject(KEY) 来使用这个全局对象

- 响应式的底层逻辑
      - 订阅发布者模式
      - 当我们使用到 ref/ reactive 绑定的值后, 匹配 routes里的组件
          - 真正的意义是：订阅了  current 这个值
          - current.value 在 hashchange 发生后，改变了，发布出去
          - 所有的订阅者都会得到这个消息，自动更新