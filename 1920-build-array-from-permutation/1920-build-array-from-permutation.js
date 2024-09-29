/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let res = new Array(nums.length).fill(0);
    
    nums.forEach((el,index)=>{
        res[index] = nums[el]
    });
    
    return res;
};