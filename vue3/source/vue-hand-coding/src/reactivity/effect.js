// 依赖收集器 fn  响应式对象改变之后， fn 要重新运行
// options lazy schedular
const targetMap = new WeakMap()
let activeEffect = null
export function effect(fn, options = { }) {
    const effectFn = () => {
        // 容错
        try {
            activeEffect = effectFn
            //fn执行的时候，内部读取响应式数据的时候，就能在get配置里读取到activeEffect
            return fn()
        } finally {
            activeEffect = null   // 打扫战场
            // 无论在try块中是否发生异常，finally块中的代码都会执行  
        } 
    }
    if (!options.lazy) {
        // 同步运行
        effectFn() // 触发 proxy 的 get
    }
    effectFn.scheduler = options.scheduler // watchEffect
    return effectFn
}

export function tarck(target, type, key) {
    // console.log(`触发 track -> target: ${target} type: ${type} key: ${key}`);
    let depsMap = targetMap.get(target);   // 第一层查找 对象key
    if (!depsMap) {
        // 初始化depMap的逻辑
        // 新增
        depsMap = new Map()
        targetMap.set(target, depsMap)
    }
    let deps = depsMap.get(key)     // 第二层 有没有
    if (!deps) {
        deps = new Set()    // 数组来存
    }
    if (!deps.has(activeEffect) && activeEffect) {
        deps.add(activeEffect)
    }
    depsMap.set(key, deps)
}
export function trigger(target, type, key) {
    const depsMap = targetMap.get(target)
    if (!depsMap) {
        // 没找到依赖
        return
    }
    const deps = depsMap.get(key)
    if (!deps) {
        return
    }
    deps.forEach((effectFn) => {
        effectFn()
    })
}