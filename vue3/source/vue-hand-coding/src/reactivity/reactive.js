// ? vue 依赖关系是用"对象"来组织的  key 对象， map更适合， 
// 组件的卸载， WeakMap 自动的删除  弱引用  垃圾回收
// 为了依赖函数的查找， 更新的时候， 找依赖 vuex 单一状态树 targetMap 依赖图谱
// const ret = reactive({num: 0, num1: 2, num2: {a: 2}})  // 深代理
import { mutableHandlers, shallowReactiveHandlers } from './baseHandlers'
export const reactiveMap = new WeakMap()
export const shallowReactiveMap = new WeakMap()
export const reactiveFlags = {
    RAW: "__v_raw",   // 原生对象
    IS_REACTIVE: "__V_isReactive"  
}
// 响应式
export function reactive(target) {
    // 修改后， 如何处理
    return createReactiveObject(target, reactiveMap, mutableHandlers)
} 
function createReactiveObject(target, proxyMap, proxyHandlers) {
    if (typeof target !== 'object') {
        console.warn(`reactive ${target} 必须是一个对象`);
        return target
    }
    // 通过 Proxy 创建代理 ， 不同的map 存储不同类型的reactive 依赖关系
    // 缓存找到了，直接返回
    const existringProxy = proxyMap.get(target)
    if (existringProxy) {
        console.log('//// cached', target);
        return existringProxy // Proxy 代理的是对象
    }
    // 执行代理
    const proxy = new Proxy(target, proxyHandlers)
    // 存个缓存
    proxyMap.set(target, proxy) // 缓存
    return proxy
}
// 用户自己决定 浅层的代理
export function shallowReactive(target) {
    return createReactiveObject(
        target, 
        shallowReactiveMap, // 区分，浅层的响应式 单独存放
        shallowReactiveHandlers
    )
}