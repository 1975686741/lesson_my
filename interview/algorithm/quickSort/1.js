function quickSort(arr, left=0, right=arr.length-1) {
    // 递归的退出条件
    if (arr.length > 1) {
        // 下一次划分左右子数组的索引
        const lineIndex = partition(arr, left, right)
        if (left < lineIndex - 1) {
            quickSort(arr, left, lineIndex - 1)
        }
        if (lineIndex < right) {
            quickSort(arr, lineIndex, right)
        }
    }
    return arr
}

function partition(arr, left, right) {
    let pivotValue = arr[Math.floor(left + (right - left) / 2)];
    let i = left
    let j = right
    while (i <= j) {
        // 找到左侧大于等于 pivotValue
        // 找到右侧小于 pivotValue
        // 交换
        while (arr[i] < pivotValue) {
            i++
        }
        while (arr[j] > pivotValue) {
            j--
        }
        if (i <= j) {
            // 交换
            swap(arr, i, j)
            i++
            j--
        }
    }
    return i
}