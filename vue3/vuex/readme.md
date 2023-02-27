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

- 模块化的知识点
    1. require + module.exports   commonjs    
      node
    2. import + export   es6  
      一个文件就是一个模块   一个函数一个功能  
      export default  默认输出的只能用一次  
      export要输出多个的话，也可以
    3. 在结构的时候，模块化语法的优先级更高 要让模块化的语法更明确  
        一次default  n次export  
        对 import 支持便捷  
        import Vuex(默认),{只能用于export}


- 手写vuex
    1. Store 类
          1. 返回store 单例
          2. state() mutations
          3. constructor options
          4. commit方法
          5. install
    2. useStore
          1. app.use()
          2. provide store
          3. inject

- es6是js的重大更新
    - 让js成为大型语言，适合企业级开发
          1. 模块化
             1. 大型项目代码很多，分工合作方便合作和管理
          2. class  get set
             1. 传统面向对象（原型式难理解）
             2. 保护属性
          3. extends 继承
          4. let const  常量 + 块级作用域
    - 代码更优雅简洁 
          - {} []解构
          - ...展开运算符
          - for of 