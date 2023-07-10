# 全栈项目及vue考点表达

- backend front 
    - 前后端分离
    - 前端使用vue + vite 全家桶 单页应用开发
    - 后端使用node + mysql 提供接口服务

- 如何介绍vue项目架构
    - 使用vite + vue 全家桶开发单页应用
        - vite比webpack快，不需要全部打包，按需加载，转译，执行
        - composition api + setup语法糖 将类式组件函数化，hooks编程 ，代码更好理解，逻辑复用，tree-shaking 
    - 移动商城使用lib-flexible rem适配，assets/main.css 组织了css的模块化（reset 样式组件（1px）css变量）
    - better-scroll 实现移动端滚动（性能，体验）
    - 使用axios 封装http请求，拦截器，请求错误处理，请求loading

- 功能细节
    - css 架构
        - css入口文件 mian.css  组织模块化 base.css / theme.css...
        - css4变量 有利于维护
        - 移动端IE盒模型 更好打理宽度
        - app.vue 全局样式，最外层容器水平方向不超出，垂直方向可以一直滚动，通用滑屏阅读模式
    - better-scroll 用法
        - 移动端优化滚动的必备组件，接近原生的android/IOS
        - 横向/竖向
        - 滚动容器 ref 标记
        - nextTick 实例化，配置方向和容器
        - 第一次要refresh一下 更新

- 组件化介绍
    - 项目封装了HomeHeader/Footer/Alltypes/GoodsList等组件，页面由组件构成，而不是标签      组件树vue-devtool
    - 组件封装的指导思想是 封装（隐藏细节，方便合作）复用
    - UI组件库（vant），通用组件（components），路由组件(pages),状态组件/无状态组件 父子组件

- 功能设计
    - 登录 注册
    - 搜索
        - 使用vant-swiper 垂直滚动搜索热词
        - lazyload 防抖搜索
        - mysql like 查询返回
        - 升级到openai 接口查询

- 项目做了哪些优化
    - 按需加载vant组件库，减少打包体积
    - tree-shaking 不用的代码不打包
    - 路由懒加载, 按需加载，减少打包体积
    - iconfont使用CDN加载，未来打包后的静态资源都会发布到CDN服务器