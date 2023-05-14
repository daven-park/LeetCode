/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) return 0;

    let dp = new Array(nums.length).fill(1);
    let maxLength = 1;

    for (let j = 1; j < nums.length; j++) {
        for (let i = 0; i < j; i++) {
            if (nums[i] < nums[j]) {
                dp[j] = Math.max(dp[i] + 1, dp[j]);
            }
        }
        maxLength = Math.max(maxLength, dp[j]);
    }

    return maxLength;
};