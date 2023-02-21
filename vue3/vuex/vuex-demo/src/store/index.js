import { createStore } from 'vuex';  // 创建一个状态仓库

// 统一管理的好处是 维护成本降低，管理更科学

export default createStore({
    // 组件可以使用它
    state: {
        count: 1   // 中央状态      data() 私有状态
    },
    // 管理规定，处于vuex中的状态不能直接修改，修改要走一定的流程  ->  会计，公司变大了就需要专门的管理
    mutations: {
        // 修改  确保一定是按照这样的规定来修改，不能随意更改，要可控
        add(state) {    // 第一个参数就是我们的state对象
            state.count++;  // 只有此处mutations 才能修改状态state
        }
    }
})