function add(a, b) {
    return a + b;
}

// 假设 memorize 可以实现函数记忆
// memoize 函数  ()  add ->
var memoizedAdd = memorize(add);

memoizedAdd(1, 2) // 3
memoizedAdd(1, 2) // 相同的参数，第二次调用时，从缓存中取出数据，而非重新计算一次