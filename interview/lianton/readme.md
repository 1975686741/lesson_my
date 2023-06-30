# 中国联通

- 面试准备
    - 无准备面试
        - 暴露出来，针对型学习 录音
    - 介绍面试后，马上记题目  复盘！
    - 继续投  继续面
    - 多平台 多投递

# 项目的亮点、难点   必考 要准备好  !important
内联样式（1000）
ID选择器（0100）
类选择器/属性选择器/伪类选择器（0010）
元素选择器/伪元素选择器（0001）
关系选择器/通配符选择器（0000）
    - 技术栈 普通   思想和话术在并行
        1. 全家桶 vue-router启用了组件的懒加载，路由守卫，实现了jwt的登录全流程
        2. 使用了pinia或vuex 数据流管理 将应用开发分成数据管理和界面开发两部分
        3. 组件化思维，按页面组件、通用组件、父子组件 来模块化开发 按需引入vant组件库 减少了代码包的体积
        4. 全面使用composition api + hooks 函数式编程，自定义了useLocation、useRequest
        5. 结合路由守卫和transition组件 实现了页面切换动画
        6. 使用lodash 在搜索界面搜索节流，之后升级为useDbounce  hooks实现
        7. 基于弹性布局、每列的高度计算，将数据绑定算好，完成瀑布流效果的开发
        8. betterscorll 实现丝滑的滚动
        9. axios拦截器，请求拦截添加token到header中的authorization字段 响应拦截解出data和做错误处理
        10. mockjs 请求模拟  使用了较复杂的Mock.Random()  随机生成图片标题...
        11. 使用了flexible 移动端rem适配  图片懒加载  后端数据过滤器 filter
   
    - 难点
        - 瀑布流
            - 数据绑定
            - 高度计算
                - mockjs 高度和图片
        - 前端token校验，使用jwt对登录注册功能进行优化，jsonwebtoken库
        - stylus  mixin混合的使用
        - pinia  模块化状态设计 

- 很多人名， 第一个人名后面不加 ;  其余的后面都加
    - css选择器

# v-if  v-show 区别
v-if和v-show是Vue.js框架中常用的两个指令，用于控制元素的显示和隐藏。它们的区别如下：

v-if指令
v-if指令在渲染时是否出现在DOM中是根据表达式的真假值来决定的。如果表达式的值为真，则该指令所在的元素会渲染到DOM中，否则该元素将不被渲染。

使用v-if指令的优点是，减少了不必要的DOM操作。当表达式的值为假时，该元素不会被渲染到DOM中，可以减少页面的加载时间和内存占用。

缺点是，在页面中频繁地切换v-if指令所在元素的显示状态时，可能会导致Vue.js重复创建和销毁组件实例，造成不必要的性能损失。

v-show指令
v-show指令也用于控制元素的显示和隐藏，但是它不同于v-if。无论表达式的值是真还是假，该指令所在的元素都会被渲染到DOM中，只是通过设置元素的display属性来控制元素的隐藏和显示。

使用v-show指令的优点是，不会重复创建和销毁组件实例，性能相对于v-if指令更好，而且在频繁切换元素的显示状态时，也不会影响到DOM的渲染。

缺点是，由于元素始终存在于DOM中，无论表达式的真假，因此可能会占用一定的内存空间。

# 鉴权
    - 理清思路  条理清晰
    1. 在路由配置数组中，使用meta对象 配置是否需要登录，还有角色 
          1. 登录 isLogin 布尔值  没有登录，去到这个页面，redirect 到login
          2. 角色 role  给些数值，未来根据用户角色看拥有的权限数组是否包含该值，看是否包含该值 403
          3. 配置路由守卫 
                1. 每次路由的切换 都会执行deforeEach钩子函数，三个参数(to,from,next),不需要鉴权 next放行，通过 to，也就是路由对象，表示要读取它的meta里的isLogin或者role属性 做相应判断，需要登录没登录，就304 redirect跳转 到login页面；当前role 没有to 的访问权限，送去首页或显示403 forbidden
          4. axios 请求拦截 判断当前localStorage中是否有token，有 就在头部之中带上Authorization字段，值为token
          5. 后端鉴权 
                1. cookie / session  通过cookie拿到session，session中间件帮我们做，在ctx.session之中 访问的上下文对象之中  
                2. jwt 解析请求中的Authoration头，jwt decode 更安全，只有后端才有解密的密码 拿到currentUser对象，在任何需要鉴权的路由中间件、控制器 前加上鉴权中间件  
                router.post('/posts', auth, postScontroller.add)  auth中间件  
                如果没有，返回403 ； 如果有，返回json数组  
                