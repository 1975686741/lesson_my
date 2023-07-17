// MyComponent 组件
class MyComponent {
    render() {
        // render 函数产出 VNode
        return {
            tag: 'div'
        }
    }
}

// VNode
const componentVnode = {
    tag: MyComponent
}

// 渲染
render(componentVnode, document.getElementById('app'))

function render(vnode, container) {
    if (typeof vnode.tag === 'string') {
        // html 标签
        mountElement(vnode, container)
    } else {
        // 组件
        mountComponent(vnode, container)
    }
}

function mountComponent(vnode, container) {
    // 创建组件实例
    const instance = new vnode.tag()
    // 渲染  组件的虚拟dom
    instance.$vnode = instance.render()
    // 挂载
    mountElement(instance.$vnode, container)
}

function mountElement(vnode, container) {
    // 创建元素
    const el = document.createElement(vnode.tag)
    // 将元素添加到容器
    container.appendChild(el)
}

// const componentVnode = {
//     tag: MyComponent
//   }
// // 把 elementVnode 渲染到 id 为 app 的元素下
// render(elementVnode, document.getElementById('app'))

// function render(vnode, container) {
//     if (typeof vnode.tag === 'string') {
//         // html 标签
//         mountElement(vnode, container)
//       } else {
//         // 组件
//         mountComponent(vnode, container)
//       }
// }
// function mountElement(vnode, container) {
//     // 创建元素
//     const el = document.createElement(vnode.tag)
//     // 将元素添加到容器
//     container.appendChild(el)
// }
// function mountComponent(vnode, container) {
//     // 创建组件实例
//     const instance = new vnode.tag()
//     // 渲染
//     instance.$vnode = instance.render()
//     // 挂载
//     mountElement(instance.$vnode, container)
// }



// import { h, init } from 'snabbdom'
// // init 方法用来创建 patch 函数
// const patch = init([])

// //  返回值是虚拟dom 
// const MyComponent = props => {
//   return h('h1', props.title)
// }

// // 组件的产出是 VNode
// const prevVnode = MyComponent({ title: '听说你想成为前端高手？' })
// // 将 VNode 渲染成真实 DOM
// patch(document.getElementById('app'), prevVnode)


// const compiler = template('<h1><%= title %></h1>')
// const html = compiler({ title: 'My Component' })

// document.getElementById('app').innerHTML = html

// setTimeout(() => {
//     const html2 = compiler({ title: '成为前端高手' })
//     document.getElementById('app').innerHTML = html2

// }, 2000);

// props 数据参数   子组件
// const Mycomponent = props => {
//     const compiler = Mycomponent.cache || (Mycomponent.cache = template('<h1><%= title %></h1>'))
//     return compiler(props)
// }
// Mycomponent.cache = null
// document.getElementById('app').innerHTML = Mycomponent({ title: '听说你想成为前端高手？' })