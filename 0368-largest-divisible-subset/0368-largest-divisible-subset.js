/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    if(nums.length === 0) return [];

    nums.sort((a, b) => a - b);
    
    const n = nums.length;
    const dp = new Array(n).fill().map(() => []);

    for(let i = 0; i < n; i++){
        dp[i].push(nums[i]);
        for(let j = 0; j < i; j++){
            if(nums[i] % nums[j] === 0 && dp[i].length < dp[j].length + 1){
                dp[i] = [...dp[j], nums[i]];
            }
        }
    }

    return dp.reduce((max, arr) => (arr.length > max.length ? arr : max), []);
};