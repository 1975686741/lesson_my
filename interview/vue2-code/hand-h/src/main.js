import { Fragment, h } from './h'
// import { Component } from './component';
import  render  from './render'


const elementVnode = h('input', {class:'class-a',type:'checkbox',checked:true,custom:'1'});
render(elementVnode, document.getElementById('app'))

// const elementVnode = h(
//     'div',
//     {
//         style: {
//             height: '100px',
//             width: '100px',
//             background: 'red'
//         }
//     },
//     h('div', {
//         style: {
//             height: '50px',
//             width: '50px',
//             background: 'pink'
//         }
//     })
// )
// console.log(elementVnode);
// render(elementVnode, document.getElementById('app'))
// const elementVnode = h('div', null, h('span'))
// console.log(elementVnode);

// const elementWidthTextVNode = h('div', null, '我是文本')
// console.log(elementWidthTextVNode);

// const fragmentVNode = h(Fragment , [h('h1'), h('h1')])
// console.log(fragmentVNode);
// // 函数组件
// function MyFunctionalComponent() {
    
// }
// // MyFunctionalComponent.prototype.render = function() {
    
// // }
// const functionalComponentVNode = h(MyFunctionalComponent, null, h('div'))
// console.log(functionalComponentVNode);

// class MyStatefulComponent extends Component{

// }
// const statefulComponentVNode = h(MyFunctionalComponent, null, h('i'))
// console.log(statefulComponentVNode);