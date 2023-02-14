// module 模块 exports 向外输出 
// 递归 值的类型是否是对象 
// 分离下数组和对象字面量 局限性  
// 手动克隆  for key in 
// module.exports = function clone(target) {
    // 循环引用的处理？ 
// export default function clone(target) {
//     if (typeof target === 'object') {
//         let cloneTarget = Array.isArray(target) ? [] : {};
//         for (const key in target) {
//             cloneTarget[key] = clone(target[key]);
//         }
//         return cloneTarget;
//     } else {
//         return target;
//     }
// };

function forEach(array, iteratee) {
    let index = -1;
    const  length = array.length;
    // while 比for 更快 
    while (++index < length) {
        iteratee(array[index], index)
    }
    return array;
}

export default function clone(target, map = new Map()) {
    if (typeof target === 'object') {
        const isArray = Array.isArray(target);
        let cloneTarget = isArray?[]:{};
        if (map.get(target)) { // hashmap 有没有拷贝过target
            return map.get(target);
        }
        map.set(target, cloneTarget);// 
        const keys = isArray ? undefined: Object.keys(target);
        // for (const key in target) { // 慢
        //     cloneTarget[key] = clone(target[key], map) // 引用式赋值
        // }
        forEach(keys || target, (value, key) => {
            if (keys) {
                key = value
            }
            cloneTarget[key] = clone(target[key], map)
        })
        return cloneTarget
    } else {
        return target
    }
}