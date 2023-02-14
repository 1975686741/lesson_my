//给定一个整数数组 nums 和一个整数目标值 target，
//请你在该数组中找出 和为目标值 target  的那两个整数，并返回它们的数组下标。
var twoSum = function(nums, target) {
    var obj ={}
    for(var i =0;i<nums.length-1;i++){
        obj.a=i
        for(var j = i+1;j<nums.length;j++){
            obj.b=j
            if(nums[i]+nums[j]==target){
                return Object.values(obj)
            }
        }
    } 
};