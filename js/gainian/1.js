function sum(a, b) {
    // 借用数组的slice方法
    let args = Array.prototype.slice.call(arguments);
    console.log(Array.prototype.toString.call(args));
    console.log(Array.prototype.toString.call(arguments));
    console.log(Array.prototype.toString.call(arguments, args));
}
sum(1, 2)