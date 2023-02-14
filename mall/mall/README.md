# vue3 写商城 
- 简历需要 

- 工程化 vite 
    前端工程化  运行在服务器端 node 
    .vue   style lang="stylus"  css 工程 stylus | less
    stylus -> vite -> npm i  stylus -> css -> 页面上的css
    vite.config.js   vite 配置文件 工程化定制 

- 组件化思想
    state  状态对象， 响应式  数据驱动界面
    常规的组件数据都放到state 中 由 reactive({...})
    子组件和state 诞生依赖关系  热更新 
    components 组件 有利于 页面级别组件或大组件更好维护， template比较简洁 
    维护好数据状态  正确  


- 商业应用npm包
    - vant  有赞， 移动商城组件库
    - lib-flexible   移动适配库
    - vue-router    路由 

- 架构（目录的意义）
    vite  工程化  项目模板
    - src  开发目录
        - assets  静态资源目录
            css image 
            main.css  base.css  @import 模块化
        - views  页面级别组件
        - common  文件夹
            通用， 和具体业务无关，可以在任何页面， 任何项目 
            style  通用的样式
                - minxin.style
                    专门方通用的混合函数的地方
        - service    api
            定义接口的地方
            方便统一管理接口 axios  baseURL　．．．　
            每个页面的接口一个独立的文件　　维护

- 异步解决方案
    - promise  es6  pending  -> fullfiled 
    - 同步化   流程难控制
    - es8 async + await  多个异步任务要同步化的时候  thenable 要简化   

- 全家桶
    - vue-router
        - redirect
            流程如下
            - path: '/'   ->  /
            - 假如 component: Home.vue  200 成功
            - 但是 redirect 
                没有直接给浏览器响应 
                给浏览器发送了一个跳转指令    /home 
                再次发出请求？  跳？3XX /home

- stylus 
    css 全新写法，  写起来更快， 很多高级功能
    css的超级  vite
    - npm i stylus 
        安装stylus css 预编译器  
        用全新的写法来写css, stylus, 帮我们自动编译成css 

    - .vue  style  lang="stylus"
    - 不用写{} :;  快
        写了也没问题
    - 表达父子元素的元素   css 模块 
        缩进  自动的加上父元素的限定
    - 混合mixin 
        形式上是函数
        封装某个功能样式的集合
        混合到调用它的地方
    - 申明变量 
    - scoped 
        防止css 类名冲突 
        给组件加data-v-hash唯一值  
        选择器加上属性选择器
    - &.active
         & 引用上一级选择器


- main.js 入口文件，有哪些工作
    全局性的
    - 完整的vue 全家桶 
        router  spa 
    - 组件库 
        vant element3 element-plus 
        按需加载
        css库文件
    - css 准备工作
        - main.css
            - reset 
                - *, *:before,*:after 伪元素也要选中
                - 移动端box-sizing: border-box IE盒模型 更有利于布局
                - font-family  -apple-system   PC 微软雅黑   sans-serif
                - 高分辨率手机  扛锯齿 让文字更清晰
                    text-rendering
                    -webkit-font-smoothing: antialiased;
            - 全局css 变量的申明  主题及样式的管理， 复用 
        - 图标字体库
            iconfont 
            引入第三方  link 
        - 移动应用 
            rem  适配  html fontSize 动态  1rem = 设计稿的多少？ 750px   1rem = 75  
            第三方框架 lib-flexible 
            Mobile First  80% 
            PC  工作 管理  后台 


