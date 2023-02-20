# 组件通信必考题

- 组件树
    - 树根：App.vue   挂载在根节点上  

    - 父子组件  props + emit    父组件负责数据通信和管理，子组件负责展示
    - 兄弟组件  共享状态，emit 由父组件来平衡
    - 跨层级组件    爷孙    传递有点麻烦  可以用 provide + inject
    - 页面级别的组件    router-view 地址 unmount  mount     全局 如：localStorage、pinia、vuex
    - 没有任何关系但要共享状态的组件

- vue 2.0 类式组件  老项目！
    1. setup()  vue3.0 composition  api     过渡阶段的语法
    2. setup 语法糖  完全抛弃类式组件   全新阶段的语法
    3. 统一编程风格

- props
- emit
- expose/ref    expose向外暴露 + ref 标记   父组件去调用子组件里的属性和方法
- attrs  props之外，父组件向子组件传递的数据
- v-model
- provide / inject
- localStorage
- vuex