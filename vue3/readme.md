# Vue的世界
   1. 可以从小程序迁移过来
      1. 组件思想 components
         1. wxml + wxss + js  可复用组件
         2. 页面由组件构成，比标签高一个级别
      2. wx:for 指令  v-for
      3. 数据驱动思想 不需要找DOM节点，setData() 自动更新
      4. 路由
         1. /pages + app.json tabber  目录下就是路由
          wx.navigator({
          url: ''
          })
          vue中如何实现？   vue-router

- 现代web App单页应用开发 SPA Single Page Application 10年 6年
   vue https://unpkg.com/vue@next
   - 根节点 启动我们的Web App

- Vue 
    1. 现代当红的前端框架，  好学、简单
    2. 组件化思想，数据驱动
    3. Vue是独立的命名空间
       1. 所有功能都是通过 Vue. 来实现
    4. Vue.version  vue的最新版 vue3
    5. 对照小程序，迁移学习
       1. template  wxml
          1. 模板

- v-on:click  @click 代替
    - this.content = ''  直接引用data里的数据
    - this.$data.content = ''
    - vue?  比recat 更友好，方便入门，学习成本低  
    - API设计人性化

- Vue 底层源码
    1. data {} 如何被监听，重新编译模板？ proxy es6
    2. Vue世界为什么要杜绝DOM编程 #app？
       1. DOM编程慢。。。