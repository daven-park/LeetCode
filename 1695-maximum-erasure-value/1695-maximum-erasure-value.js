/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let set = new Set();
    let sum = 0;
    let max = 0;
    
    let i = 0, j = 0;
    while(i < nums.length && j < nums.length){
        if(!set.has(nums[j])){
            set.add(nums[j])
            sum += nums[j++]
            max = Math.max(sum, max)
        } else{
            set.delete(nums[i])
            sum -= nums[i++]
        }
    }
    return max
};