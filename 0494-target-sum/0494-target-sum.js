/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const dp = {};
    
    const dfs = (i, sum) => {
        if(i === nums.length){
            if(sum === target) return 1;
            return 0;
        }
        
        if(!dp[i]) {
            dp[i] = {};
        }else {
            if (dp[i][sum] !== undefined) return dp[i][sum];
        }
        
        return dp[i][sum] = dfs(i + 1, sum + nums[i]) + dfs(i + 1, sum - nums[i]);
    }
    return dfs(0, 0);
};