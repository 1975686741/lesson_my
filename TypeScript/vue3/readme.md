# vue3 + ts

- vue3以前 对TypeScript类型系统支持地不是很友好
    - vue3 框架本身是用TypeScript写的
    - vue3 借鉴了react的hooks函数编程 setup + composition API 抛弃落后的类式组件
    - vue3 proxy 响应式代理  vue3 defineProperty
    - react 单项数据流  vue 双向(比如v-model)
    - vue 有指令 语法更优雅   react则没有 入门门槛较高
    - 都是 MVVM设计模式

- vue3 + ts 注意的地方
    1. 项目架构会有 types 目录  类型的声明，多半为 数据接口 interface
    2. alias设置 vite.config.ts 和 tsconfig.json  path  @types/node
    3. reactive<> 泛型约束 对象 ts的重点
 
 - 数据接口怎么做？
    - /api  表示接口地址  http://api.vikingship.xyz/api/columns?currentPage=1&pageSize=3
    - /api/columns?currentPage=1&pageSize=3   /api 后端工程师 接口的路劲的开始，约定
    - 前后端分离
        - 前端 vue 3000
        - 后端 koa 8080
        -  涉及跨域  CORS、JSONP、代理proxy
        -  A前端    C     B后端  当后端地址已存在且在线上