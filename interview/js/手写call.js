// 手写call  老版本
// Function.prototype.myCall = function (context = globalThis) {
//     // 关键步骤，在 context 上调用方法，触发 this 绑定为 context，使用 Symbol 防止原有属性的覆盖
//     const key = Symbol('key')
//     context[key] = this
//     // es5 可通过 for 遍历 arguments 得到参数数组
//     const args = [...arguments].slice(1)
//     const res = context[key](...args)
//     delete context[key]
//     return res
//   };
//   // 测试
//   const me = { name: 'Jack' }
//   function say() {
//     console.log(`My name is ${this.name || 'default'}`);
//   }
//   say.myCall(me)


// 手写call  新版本
// 手写时候， es6 版本会比老版本更优雅
Function.prototype.call = function(context, ...args) {
    context = context || window
    let key = Symbol('key'); // 唯一值 
    // 给context 动态添加了fn属性
    context.key = this; // 绝对不会覆盖context上的属性
    // 返回值？ 
    // 只有读源码， 写源码的才会用到eval 
    let result = eval('context.key(...args)');
    delete context // 让context 干净 代码洁癖
    return result 
}
// 测试
const ni = { name: 'Rose' }
function say() {
  console.log(`Your name is ${this.name || 'default'}`);
  return 111
}
console.log(say.call(ni))