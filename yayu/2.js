// 本分
function add(a, b) {
    return a + b;
}
// fn 等待着被优化的函数
// 闭包  函数内部还有函数
function memorize(f) {
    // 缓存结果 {}  key
    // console.log(fn, args);
    var cache = {
        // key 一定要是个字符串
        // "hu": "米哈游！"
    };
    return function () {
        // console.log('我是inner function', cache.hu);
        // console.log(Array.prototype.join.call(arguments, ","),'////');
        var key = arguments.length + Array.prototype.join.call(arguments, ",");
        // console.log(key);
        if (key in cache) {  
            console.log('缓存');
            return cache[key]   // 没有运行
            // apply  call 都可以运行函数 手动指定内部的this
            // apply  数组集合 一次性传  作为f的参数
            // call 一个一个  需要...   f.call(this,...arguments)
        }
        else  {
            console.log('add....');
            return cache[key] = f.apply(this, arguments);
        }
    }
}
// 函数运行完成后销毁
// 函数将会进入执行栈  创建函数作用域
var memoizedAdd = memorize(add) // 运行了才会生成闭包函数
// 出栈   内存的回收  cache就没有了 但却没有，cache被接下来的函数引用着
memoizedAdd(1,2); // 运行时可以找到生成时上下文环境中的变量
memoizedAdd(1,2); 