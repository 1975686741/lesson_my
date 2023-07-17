import { VNodeFlags, ChildrenFlags } from './flags'
export const Fragment = Symbol()
export const Portal = Symbol()

export function h(tag, data = null, children = null) {
    let flags = null
    if (typeof tag === 'string') { // html svg
        flags = tag === 'svg' ? VNodeFlags.ELEMENT_SVG : VNodeFlags.ELEMENT_HTML
    } else if (tag === Fragment) {
        flags = VNodeFlags.FRAGMENT
    }
    else if (tag === Portal) {
        flags = VNodeFlags.PORTAL
        tag = data && data.target
    }
    else {
        // 兼容 Vue2 的对象式组件
        if (tag !== null && typeof tag === 'object') {
            flags = tag.functional
                ? VNodeFlags.COMPONENT_FUNCTIONAL       // 函数式组件
                : VNodeFlags.COMPONENT_STATEFUL_NORMAL  // 有状态组件
        } else if (typeof tag === 'function') {
            // Vue3 的类组件
            flags = tag.prototype && tag.prototype.render
                ? VNodeFlags.COMPONENT_STATEFUL_NORMAL  // 有状态组件
                : VNodeFlags.COMPONENT_FUNCTIONAL       // 函数式组件
        }
    }
    let childFlags = null
    if (Array.isArray(children)) {
        const { length } = children
        if (length == 0) {
            childFlags = ChildrenFlags.NO_CHILDREN
        } else if (length == 1) {
            childFlags = ChildrenFlags.SINGLE_VNODE
            children = children[0]
        } else {
            // 2个以上
            childFlags = ChildrenFlags.KEYED_VNODES
            children = normalizeVNode(children)
        }
    }
    else if (children == null) {
        childFlags = ChildrenFlags.NO_CHILDREN
    }
    else if (children._isVNode) {
        childFlags = ChildrenFlags.SINGLE_VNODE
    }
    else {
        // 其他情况都作为文本节点处理，即单个子节点，会调用 createTextVNode 创建纯文本类型的 VNode
        childFlags = ChildrenFlags.SINGLE_VNODE
        children = createTextVNode(children + '')
    }
    return {
        tag,
        _isVNode: true,  // 区别与其他对象普通对象   响应式对象。。。
        el: null,
        flags,
        data,
        children,
        childFlags
    }
}

function createTextVNode(text) {
    return {
        _isVNode: true,
        flags: VNodeFlags.TEXT,
        tag: null,
        children: text,
        childFlags: ChildrenFlags.NO_CHILDREN
    }
}
function normalizeVNode(children) {
    const newChildren = []
    for (let i = 0, len = children.length; i < len; i++) {
        const child = children[i]
        if (child.key == null) {
            child.key = '|' + i
        }
        newChildren.push(child)
    }
    return newChildren
}