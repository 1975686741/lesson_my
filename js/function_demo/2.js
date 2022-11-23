//  class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// sayHello() {

// }
//  }
// // 使用构造函数去给对象添加属性
// // 共享 类的方法
// JS独有的面向对象方式
//构造函数
var name = '世龙';
var age = 17;

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHello = function() {
    // this
    console.log(`Hello,我是${this.name},今年${this.age}岁`);
    console.log('Hello, 我是' + this.name + ',今年' + this.age + '岁');
}
// 
 const Summer = new Person('胡毅辉', 21);  // 构造函数运行
 Summer.sayHello();  // 对象方法被运行

 const Zhang = new Person('张新禧', 21);
 Zhang.sayHello();

 console.log(Summer.name, Summer.age);

//  const fn = Summer.sayHello; 
//  fn();