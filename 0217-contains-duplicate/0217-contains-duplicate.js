/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let checkObj = {};
    for(let i = 0; i < nums.length; i++){
        // checkObj[nums[i]] = ++checkObj[nums[i]] || 1;
        if(checkObj[nums[i]]){
            return true;
        }
        checkObj[nums[i]] = 1;
    }
    return false;
};