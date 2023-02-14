# vue3 商城管理后台  Admin

- mall 移动商城
    - 用户用的 移动端
    - vant + axios + 全家桶

- mall-admin
    - 给同事用的（小编、运营）
    - 上架商品
    - 上架活动
    - swiper    幻灯片的内容
    - 权限  同事

- 全家桶开发理解 

- vite是如何启动项目的  npm run dev 运行的流程
     1. package.json  script 脚本
        1. dev  development 开发阶段
        2. build    开发完了，打包上线做准备 dist/
     2. vite  工程化最快的工具
        1. index.html 作为首页在3000端口 以http-server 启动起来
     3. src/main.js  作为 单点入口文件
        1. vite的特别之处 script type="module" 让js支持es6的模块化
        2. 实例化 vue  app
        3. 并把App 组件挂载导 #app 节点上
     4. 基于模块依赖，把代码组织起来

- redirect 细节
     1. localhost：3000/    Http请求响应式的
         - index.html 已发送到浏览器并显示
         - App.vue 已挂载 
     2. router
        1. / redirect
        2. 发送 302   
        3. 根据跳转去到了下一个配置 /introduce
 
- header  + main.content 
- 导航栏nav App.vue   + router-view 页面级别组件
