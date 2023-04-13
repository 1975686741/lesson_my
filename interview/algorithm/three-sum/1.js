const nums = [-1, 0, 1, -1, 2, 4, 5, 6]
// [-1, 0, 1]  [-1, -1, 2]

// 双指针 
// 三数求和问题，换成1个数 0(n), 做减法，得到的结果-》两数之和

const threeSum = function(nums) {
    let res = [];
    // 排序 从小到大  有序后 双指针发挥威力
    nums = nums.sort((a, b) => a-b);  // [ -1, -1, 0, 1, 2, 4 ]
    // 缓存数组长度
    const len = nums.length
    // i < len-2留有两个指针的位置
    for (let i = 0; i < len-2; i++) {
         // 左指针j
         let j = i + 1
         // 右指针k
         let k = len -1
         // 去重
         if (i > 0 && nums[i] === nums[i-1]) {
            continue
         }
         // 还可以再找
         while(j < k) {
            // 三数之和小于0  左指针右移
            if (nums[i] + nums[j] + nums[k] < 0) {
                j++;
                while (j < k && nums[j] === nums[j-1]) {
                    j++;
                }
            } 
            // 三数之和大于0  右指针左移
            else if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
                while (j < k && nums[k] === nums[k+1]) {
                    k--;
                }
            }
            else {
                res.push([nums[i], nums[j], nums[k] ])
                j++;
                k--;
                while (j < k && nums[j] === nums[j+1]) {
                    j++;
                }
                while (j < k && nums[k] === nums[k-1]) {
                    k--;
                }
            }
         }
    }
    return res
}
console.log(threeSum(nums));