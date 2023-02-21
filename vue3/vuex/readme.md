- 组件 路由 数据管理  
     - 跨层级 跨页面 共享状态 比如login  
     - 未来工作将会分成两部分：
         1. 组件开发（切页面 实习生）
         2. 数据管理（当项目越来越大的时候）从组件本地(没什么状态 computed)抽离到中央(leader)

- 项目架构 store

- vuex的共享状态，来到本地的流程：
    1.  vuex 提供的useStore hooks api 拿到store
    2.  从store.state.count     state是状态对象，进行 读操作
    3.  作为computed 计算属性的返回值，成为当前的状态
         1. 依赖于store.state.count  订阅了count
    4. 全局的 $store对象  也可以取到 

- vuex 的数据流转过程
    1. 本地组件  数据状态 data() reactive/ref  将被收到中央，方便共享和管理！
    2. 使用 computed计算属性 + useStore()    让我们的状态从中央来到地方
    3. 本地不可以直接修改state，store.commit('add')  提交一个mutations 名字一定要在mutaions里
    4. 从而帮助我们管理好数据
