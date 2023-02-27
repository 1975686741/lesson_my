import { reactive, inject} from 'vue';


const STORE_KEY = '__store__'
function useStore() {
    return inject(STORE_KEY)   //引用
}
function createStore(options) {
    // 需要返回store实例
    // store里面要有 install方法   app.use  vue和周边生态的约定

    // 面向对象封装思想

    // createStore只在main.js调用一次,确保状态树是 单一的。确保数据是唯一且正确  
    return new Store(options)
}

// js为了像大型语言（java)一样的面向对象能力的提升,能够大型企业开发
// clsee只是一个语法糖，底层还是 function +  prototype
class Store {
    constructor(options) {
        // this -> store
        this.$options = options  // 给store对象添加了$options 属性，可以两种方法访问状态了
        // 1. useStore + store.state.count
        // 2. store.$optins.state
        this._state =  reactive({
            data: options.state()
        })
        // 从编程规范上来说，Mutations不能更改
        this._mutations = options.mutations
    }
    // get 读 属性  set 写 方法   store.state
    get state() {
        // console.log('[]');
        return this._state.data
    }
    // set state(newVal) {
    //     this._state.data = newVal
    //     // console.log([]);
    // }
    install(app) {
        // console.log('install');
        // 提高注册store
        app.provide( STORE_KEY, this)
    }
    // type 对应mutations key
    // payload传参
    commit(type, payload) {
        const entry = this._mutations[type]
        console.log(entry, '//////');
        entry && entry(this.state, payload)
    }
}

const PI = 3.14   
 
// 在一个模块中只能有一次

// 方便管理。管理向外输出什么
export  { 
    createStore,
    useStore,
    PI
}