var propValue = function(obj){
    return obj.value
}
// function memorize(f) {
//     // 缓存结果 {}  key  
//     var cache = {
//         // key 字符串
//     };
//     // 作用域 
//     return function(){
//         var key = arguments.length + Array.prototype.join.call(arguments, ",");
//         console.log(key,'////');
//         if (key in cache) { // in json 运算符
//             return cache[key] // 没有运行  f
//         } else {
//             return cache[key] = f.apply(this, arguments)
//         }
//     }
// }

var memorize = function(func, hasher) {
    var memoize = function(key) {
                // cache
        var cache = memoize.cache;
        // key?
        var address = '' + (hasher ? hasher.apply(this, arguments) : key);
        if (!cache[address]) {
            cache[address] = func.apply(this, arguments);
        }
        return cache[address];
    };
    // cache 挂载在对象上
    memoize.cache = {};
    return memoize;
};
var memoizedAdd = memorize(propValue, JSON.stringify)
console.log(memoizedAdd({value: 1})) // 1
console.log(memoizedAdd({value: 2})) // 1