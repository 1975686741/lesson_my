import { createStore }  from './gvuex.js'

// createStore只在main.js调用一次,确保状态树是 单一的。确保数据是唯一且正确  
// const { createStore }  = Vuex 
// console.log(PI)
const store = createStore({
    state() {
        return {
            count: 1
        }
    },
    mutations: {
        add (state) {
            state.count++
        }
    }
})

export default store