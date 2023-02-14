/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let len = nums.length;
    for (var i=0; i<len; i++) {
        if (target == nums[i] || target < nums[i]) {
            return i;
        } 
    }
                return len;
};