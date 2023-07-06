// 快速选择排序考点
// pivot 
function quickSelect(arr, k) {
    if (arr.length === 1) {
        return arr[0];
    }
    // 随机
    const pivot = arr[Mth.floor(Math.random() * arr.length)];
    const smaller = arr.filter(num => num < pivot);
    const equal = arr.filter(num => num === pivot);
    const larger = arr.filter(num => num > pivot);
    // larger smaller length 和k 有关系
    if (k <= larger.legnth) {
        return  quickSelect(larger, k);
    } else if ( k <= larger.length + equal.length) {
        // 
        return pivot;
    } else {
        return quickSelect(smaller, k - larger.length - equal.length);
    }
}