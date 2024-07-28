/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(nums, cost) {
    let n = nums.length;
    let v = [];
    let totalCost = 0;

    for (let i = 0; i < n; i++) {
        v.push([nums[i], cost[i]]);
        totalCost += cost[i];
    }

    v.sort((a, b) => a[0] - b[0]);

    let mid = Math.floor((totalCost + 1) / 2);
    let target = -1;
    let currSum = 0;

    for (let i = 0; i < n; i++) {
        currSum += v[i][1];
        if (currSum >= mid) {
            target = v[i][0];
            break;
        }
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += Math.abs(nums[i] - target) * cost[i];
    }

    return ans;
};