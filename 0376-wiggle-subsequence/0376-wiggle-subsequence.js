/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    let n = nums.length;
    if(n < 2) return n;
    
    let up = 1, down = 1;

    for(let i = 1; i < n; i++){
        if(nums[i] > nums[i - 1]) up = down + 1;
        else if (nums[i] < nums[i - 1]) down = up + 1;
    }
    return Math.max(down,up)
};