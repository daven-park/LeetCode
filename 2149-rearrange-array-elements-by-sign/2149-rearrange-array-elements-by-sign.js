/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {    
    let pos = nums.filter(x => x > 0);
    let neg = nums.filter(x => x < 0);
    let ans = [];

    for(let i = 0; i < pos.length; i++){
        ans.push(pos[i], neg[i])
    }
    
    return ans
};