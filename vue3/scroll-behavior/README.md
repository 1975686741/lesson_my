- 何时退出?  定位到上次浏览位置
    - 路由钩子 router.beforeEach

- vue-router  scrollBehavior
    - 用户体验细节和性能优化
    - 使用 vue--router 借鉴vue3 提供的composition API
        - router.beforeEach  类式编程 v2
        - onBeforeRouterLeave  composition API
    - router 单例中
        - createRouter
        - scrollBehavior(to, from) => {
        - to.name
        - }

- 第二种解决方案
    - vue性能优化 vue-router 的概念变了下
    - A -> B 页面  destory unMounted 在内存中回收组件
    - B  在内存中生成 -> mounted 挂载在页面上
    - keepAlive 扑克牌的层叠关系
        - A => B   A不销毁，B盖到A上面
        - B => A   B退出，A直接显示