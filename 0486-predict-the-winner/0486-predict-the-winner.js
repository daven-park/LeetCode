/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
    const memo = Array(nums.length).fill(0);
    
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i; j < nums.length; j++) {
            if (i === j) {
                memo[i] = nums[i];
            }else{
                memo[j] = Math.max(nums[i] - memo[j], nums[j] - memo[j - 1]);
            }
        }
    }
    return memo[nums.length - 1] >= 0;
};