
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    // 每次循环索引是否递增
    let step = 0;
    for(let i = step; i < nums.length; i+=step) {
            // 如果下一个元素和当前元素重复，删除下一个元素
        if(nums[i] === nums[i + 1]) {
            nums.splice(i+1, 1)
            // 索引停留原位置，继续与下一位比较
            step = 0
        } else {
            // 移动下一位
            step = 1;
        }
    }
    return nums.length;
};
