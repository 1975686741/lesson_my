import { tarck, trigger } from "./effect"

// import { reactiveFlags } from './reactive'
const get = createGetter()
const set = createSetter()
const has = () => {}
const deleteProperty = () => {}

// shallow 浅
function createGetter(shallow = false) {
    return function get(target, key, receiver) {
        // 本职 返回普通对象的值
        // es6 提供的映射api
        // target[key]
        // const isExistMap = () => key === reactiveFlags.RAW
        const res = Reflect.get(target, key, receiver)
        // console.log(receiver, res, '=-=');
        tarck(target, "get", key)   // 收集依赖
        return res 
    }
}
function createSetter() {
    return function set(target, key, value, receiver) {
        const result = Reflect.set(target, key, value, receiver)
        trigger(target, "set", key) 
        return result
    }
}

export const mutableHandlers = {
    get,
    set,
    has,
    deleteProperty
}