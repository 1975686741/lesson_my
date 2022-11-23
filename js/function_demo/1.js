// 封装
// add函数声明在全局window
'use strict';
function Test() {
    // this 由函数的运行方式决定
        console.log(this);
        this.x = 1;
}
// 函数可以被new   构造函数
const o = new Test();
console.log(o.x);

function add(x,y) {
    // 检验参数   js  独特 this, arguments
    // 两个关键字对象
    console.log(this, arguments);
    return x + y; 
}

let obj = {
    add: add
}

console.log(add(1,2));  //所有语言 
obj.add();  //作为对象的方法调用的时候