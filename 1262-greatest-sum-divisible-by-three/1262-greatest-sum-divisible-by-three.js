/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    let dp = new Array(3).fill(0);
    for (let num of nums) {
        for (let i of dp.slice(0)) {
            let sum = i + num;
            let mod = sum % 3;
            dp[mod] = Math.max(dp[mod], sum);
        }
    }
    return dp[0];
};