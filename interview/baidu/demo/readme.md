# 百度的前端基础一面？

      - 面试是当面展示自己，也要让面试官舒服
      - 表达逻辑  
      - 激情 好学 谦虚 心理素质好
      - 场景题 灵活理解
      - 底层思想  追根问底

- 扎实的前端基础
    1. 新手引导功能实现  实战能力+面向对象
          1. 实战能力，代码
          2. html css js 原生开发能力
    2. 添加遮罩层，在图片上方添加一张只有人脸的照片
          1. 考察css position  居中
    3. echarts  动画实现原理
          1. canvas / svg
          2. requestAnimationFrame + canvas  的绘图api
          3. 黑板擦功能
          4. SVG  DOM编程
    4. 了解canvas吗？
          1. html5 绘图标签，有丰富的绘制api，游戏、数据可视化方向、AR、VR、WEBGL(3D)的利器 
          2. echarts  数据可视化 折线图那些  vue后台管理系统
          3. 绘图API结合 requestAnimationFrame 手写饼状图什么的，但是由于时间，去搞vue node 算法
          4. html5  file 处理上传头像中，用canvas做图片压缩和剪裁
    5. 如何实现组件滑动切换效果？
          1. vue内置了 transition组件
          2. v-if 和 v-show 组件的切换
          3. 移动端的事件  pinch + tap  hammer.js
          4. name 给css的命名钩子和事件的钩子
    6. 语义化的理解
          1. html5 有一些语义化标签
                1. header footer main aside section nav article 
          2. 对SEO友好 有利于搜索引擎  百度的排名
                1. vue SPA单页应用 不利于SEO 只有#root
                2. 传统的MVC template + data ssr  有利于搜索引擎
          3. 代码的可读性
    7. less 多处用到px转换为vw  如何实现
          1. 兼容性的复用
                1. 公司的设计稿 iphone 375pt 乘以像素密度比 750px
                      1. 蓝湖  前端设计稿
                2. mixin 
                      1. pxToVW($px, $attr=width)
                      2. $vw = ($px / 750) * 100
                      3. $attr {$vw}vw
                      4. .box {
                      5. pxToVW( , )
                      6. }
    8. vue-router 中router 和 route 的区别
          1. router 是前端路由管理对象
                  1. router push等多种跳转操作
                      1. 路由守卫 meta isLogin
          2. route 是当前路由对象
                1. route 取 params qs等参数
    9. vue 单页应用无刷新更新组件怎么实现
          2.  vue-router routes数组配置  单页应用
          3.  app.use(router) 启用路由
          4.  vue有 router-view组件
                  1.  pqth -> 页面级别组件 显示到router-view中
                  2.  当点击a标签等切换路由时，原组件卸载，匹配新路径的页面级别组件显示在router-view 
                    `` <Component is={component}>
                        <router-view v-slot="{Component}"
                              <component :is="Component"/>
                        </router-view>
                    ``
                  3. hashchange # 兼容 和 history 后端路由一样好理解，两种模式不需要刷新 ie的时代以及过去了
    10. vue 在页面中如何监听回到上一页的操作
            ``
            mounted() {
                  // DOM ready  事件监听
                  // 浏览器嗅探  
                  if(window.history && window.hisotry.pushState) {
                        // 当前路由入栈
                        history.pushState(null, null, document.URL)
                        window.addEventLienter('popstate', this.goBack, false)
                  }
            }
            haschange 
            ``
                