let nums = [1,2,3];
let obj ={ val:5 };
// 原数组不会受影响
// 实现了从 命令式编程 到 函数式编程的 飞跃
// 参数是有三个, 按需使用    第三个参数是数组本身
let newNums = nums.map(function(item, index, array) {
    // 没有return 会undefined
    return item + index + array[index] + this.val
}, obj)
console.log(newNums);