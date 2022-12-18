/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    let total = nums.reduce((acc, cur) => acc + cur, 0)
    let divide = total / k;
    
    if(total % k) return false;
    
    const visited = new Array(nums.length).fill(false)
    
    nums.sort((a, b) => b - a);
    
    const solve = (idx, k, sum) => {
        if(k === 0) return true;
        
        if(sum === divide) return solve(0, k - 1, 0);
        
        for(let i = idx; i < nums.length; i++){
            if(visited[i] || (sum + nums[i]) > divide) continue;
            visited[i] = true;
            if(solve(i + 1, k, sum + nums[i])) return true;
            visited[i] = false;
        }
        return false;
    }
    return solve(0, k, 0);
};