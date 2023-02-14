// 构造函数
// 哪一站？ Function -> Object
function Person(name, age) {
    // 构造
    // 基于原型的封装  {}
    this.name = name
    this.age = age
}
Person.prototype.sayHi = function() {
    console.log(`你好，${this.name}`);
}
const aHui = new Person('叫阿辉',21);
console.log(aHui instanceof Person);
// console.log(aHui instanceof);