// assign
let obj = { name: 'sy', age: 18, hometown: {
    name: '抚州'
} }
const obj2 = Object.assign( {}, obj, { name: 'sss' } ) 
console.log(obj2);
obj2.hometown.name = '东乡'
console.log(obj);  // 浅拷贝 如果其中一个对象改变了这个地址，就会影响到另一个对象。

