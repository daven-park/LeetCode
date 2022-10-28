/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {};
    for(let i = 0; i <  nums.length; i++){
        obj[nums[i]] = ++obj[nums[i]] || 1;
    }
    
    for(const key in obj){
        if(obj[key] > nums.length / 2){
            return key;
        }
    }
    return 0;
};