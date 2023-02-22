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

- vuex 的原则
    - vuex 是一种复杂的设计范式 管理中大型项目的状态（共享状态）
    - 小项目最好不要用vuex, 组件自己管理状态 props + emit localStorage ... 共享
    - 组件基本不在自己管理状态
        actions 都在vuex 提供了
        data()  reactive ref 很少在组件里用了
    - store 全局管理状态
        全家桶之一 vuex/pinia   vuex 是现在  pinia 是未来
        - createStore()  单一状态树 只能有一个仓库， 状态（共享）唯一
        - 分成多个模块 modules  
            每个module 都有独立的 state  mutations actions
        - state 只读状态 
        - mutations  只有它可以修改state  commit('相应的方法')
        - actions  数据的请求不再发生在组件内部，而是在actions 中
            - dispatch  来触发action
            - 
- vuex 数据流转过程
    - root（Store)  ->  modules(cart | products) -> state(声明) 状态的查找  读操作
    - 数据（服务器端） ->  api(接口模块 products) ->  actions(管理接口请求 dispatch) -> mutation(commit 唯一修改数据 actions 里调用) -> state(写操作)


- vuex的构成
  - store
  - state   状态对象    data(){} 
  - getters 
  - mutaions    修改对象
      - commit
  - actions 动作
      - dispatch
  - useStore
  - $store
