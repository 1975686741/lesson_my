var stuA = {
    name: 'hyh'
};
var stuB = {
    name : 'zxx'
};
function sayHi(...args) {
    console.log(arguments,...args);
    console.log(`你好，我是${this.name}`);
}
Object.prototype.sayHi = sayHi;
// stuA 和 stuB  都能sayHi
// call 改天换命  手动指定this的指向
// stuA.sayHi();
// sayHi.call(stuB);
sayHi.call(stuA,1,2);
sayHi.apply(stuA,[1,2]);
// var func = sayHi.bind(stuA);
// func();