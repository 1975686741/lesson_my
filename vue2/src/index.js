// console.log('hello parcel')
import { h } from './h.js'; // VNODE 的生成
import render from './render.js' // 渲染

const prevVNode = h('div', null, [
    h('li', { key: 'a' }, '节点1'),
    h('li', { key: 'b' }, '节点2'),
    h('li', { key: 'c' }, '节点3')
])
  
  // 新的 VNode
const nextVNode = h('div', null, [
    h('li', { key: 'd' }, '节点1'),
    h('li', { key: 'a' }, '节点2'),
    h('li', { key: 'b' }, '节点3')
])

// const handler = () => alert('clicked');
// const  prevNode = h('div', {
//     style: {
//         width: '100px',
//         height: '100px',
//         backgroundColor: 'red'
//     },
//     onclick: handler
// })

// const nextVNode = h('div', {
//     style: {
//         width: '100px',
//         height: '100px',
//         border: '1px solid green'
//     }
// })


// const prevNode = h('div', null, '旧的VNode')
render(prevVNode, document.getElementById('app'))
// class MyComponent {
//     render() {
//         return h('div', null, '新的VNode')
//     }
// }
// const nextVNode = h(MyComponent) // 内存？ 
 
setTimeout(() => {
    render(nextVNode, document.getElementById('app'))
}, 5000)
