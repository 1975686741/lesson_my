const bubbleSort = arr => {
    console.time('冒泡排序耗时');// 时间计算
    const length = arr.length; // 缓存数组长度  变量 不会变  有利于性能优化
    // 相邻  一趟循环  搞定一个位置的顺序对的 交换？ 左右侧一定是最大值
    for (let i = 0; i < length - 1; i++) {   // i 一个元素的排序  外循环 i + 1
        // 所有元素排序  位置上放置正确的数字  位置？ 
        let isSorted = true;  // 本轮有序？
        for (let j = 0; j < length - i - 1; j++) { // 内循环 排好一个位置后 
                if (arr[j] > arr[j + 1]) {
                    // const temp = arr[j];
                    // arr[j] = arr[j + 1];
                    // arr[j + 1] = temp;
                    [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                    isSorted = false
                }
        }
        if (isSorted) {
            // 一次都没有发生？
            break;
        }
    }
    return arr;
    console.timeEnd('冒泡排序耗时');
}

console.log(bubbleSort([5, 8, 6, 3, 9, 2, 1, 7]))