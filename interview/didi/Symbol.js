// 创建唯一的属性名，以避免属性名冲突
// 防止属性被覆盖，使用 Symbol 创建的属性是不可枚举的，可以防止属性被意外覆盖
// 在类中使用：可以在类中使用 Symbol 创建私有属性和方法  
    // es6 企业级大型项目，提升面向对象能力
    // 私有方法？  类的方法，供内部使用，隐藏实现的细节
const _privateMethod = Symbol('privateMethod');
class MyClass {
  constructor() {
    this[_privateMethod] = () => {
      console.log('This is a private method.');
    };
  }
  publicMethod() {
    // symbol 作为私有方法的调用方式
    this[_privateMethod]();
  }
}
const obj = new MyClass();
obj.publicMethod(); // 输出 "This is a private method."
obj[_privateMethod](); // 报错，私有方法无法访问

// ES6 提供了一些内置的 Symbol方法，用于扩展对象的行为  
//             Symbol.iterator：用于定义对象的默认迭代器，迭代对象的时候过滤一些不必要的属性
//             Symbol.hasInstance：用于判断一个对象是否为某个构造函数的实例。
//             Symbol.toPrimitive：用于将一个对象转换为原始值


// 简单数据类型不能new
// symbol  lable 标识

