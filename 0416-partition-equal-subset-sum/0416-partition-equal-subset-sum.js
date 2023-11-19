/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = nums.reduce((a, b) => a + b, 0);
    
    if (sum % 2 !== 0) return false;
    
    let half = sum / 2; 
    let dp = [];
    
    dp[0] = true;
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        for (let j = half; j >= num; --j) dp[j] = dp[j] || dp[j - num];
    }
    
    return dp[half] || false;
};