import { tarck, trigger } from "./effect"
import { 
    reactive, 
    reactiveFlags, 
    reactiveMap, 
    shallowReactiveMap 
    } from "./reactive"
import { isObject } from "../shared"
const get = createGetter()
const set = createSetter()
const has = () => {}
const deleteProperty = () => {}
const shallowReactiveGet = () => {}

// shallow 浅
function createGetter(shallow = false) {
    return function get(target, key, receiver) {
        // 本职 返回普通对象的值
        // es6 提供的映射api
        // target[key]
        // const isExistMap = () => key === reactiveFlags.RAW && (receiver === shallowReactiveMap.get(target)) 
        // if (key === reactiveFlags.IS_REACTIVE) {
        //     return true
        // } else if(isExistMap()){
        //     return target
        // }
        
        const res = Reflect.get(target, key, receiver)
        // console.log(receiver, res, '=-=');
        tarck(target, "get", key)   // 收集依赖
        if (isObject(res)) {
            return shallow? res : reactive(res) 
        }
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
export const  shallowReactiveHandlers = {
    get: shallowReactiveGet,
    set,
    has,
    deleteProperty
}