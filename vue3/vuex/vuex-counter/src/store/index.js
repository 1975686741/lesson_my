import { createStore } from 'vuex'


// 离开组件 设计状态
const state = {
    count: 0    // 共享状态
}

const mutations = {
    // 修改，而且是同步     简单规则，更有利于状态的正确
    increment(state) {
        state.count++
    },
    decrement(state) {
        state.count--
    }
}

// 适合做各种各样的事   干事的
// 最后的目标：提交mutations
const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    incrementIfOdd({ commit, state }) {
        if ((state.count + 1) % 2 === 0) {
            commit('increment')
        }
    },
    incrementAsync({ commit }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('increment')
                resolve
            }, 2000);
        })
    }
}

const getters = {   // computed
    evenOrOdd: state => state.count % 2 === 0 ? 'even' :'odd'

}


// 状态仓库设计好


//  状态管理不是很多  没有用modules 分模块  
// 单一状态树   root 状态树的根部
export default createStore({
    state,
    mutations,
    actions,
    getters,
})