/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let ans = 0;
    let sortedArr = nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length; i += 2){
        ans += Math.min(sortedArr[i], sortedArr[i + 1])
    }
    return ans
};