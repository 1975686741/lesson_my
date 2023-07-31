// 简单数据类型，响应式如何做
import { track, trigger } from './effect'
import { reactive } from './reactive'
import { isObject } from '../shared'

export function ref(val) {
    if (isRef(val)) {
        return val
    }
    // 简单数据类型的ref
    return new RefImpl(val)
}
//ref(null)  dom标记点
export function isRef(val) {  
    return !!(val && val.__isRef)
}
// es6 class  get set方法
class RefImpl {
    constructor(val) {
        // 这一次的响应  是用ref做的
        this.__isRef = true
        this._val = convert(val)
    }
    get value() {
        track(this, 'get', 'value')
        return this._val
    }
    set value(val) {
        // 性能优化 
        if (val !== this._val) {
            this._val = convert(val)
            trigger(this, 'set', 'value')
        }
    }
}
function convert(val) {
    return isObject(val) ? reactive(val) : val
}