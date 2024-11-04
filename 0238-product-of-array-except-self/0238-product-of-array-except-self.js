/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let ans = [];
    let len = nums.length;
    let left = [], right = [];
    
    left.push(1);
    right.push(1);
    
    for(let i = 1; i < nums.length; i++){
        left.push(nums[i - 1] * left[i - 1]);
    }
    
    for(let i = len - 1; i >= 1; i--){
        let num = nums[i] * right[0];
        right.unshift(num);
    }
    
    for(let i = 0; i < len; i++){
        ans.push(left[i] * right[i])
    }
    return ans
};