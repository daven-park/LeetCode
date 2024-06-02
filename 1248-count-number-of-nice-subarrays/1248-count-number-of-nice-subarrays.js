/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    var res = 0;
    let odd = [];
    let last = 0;
    for(let i = 0; i < nums.length; i++){
        if (nums[i] % 2 ===1) odd.push(i);
        if (odd.length > k) last = odd.shift() + 1;
        if (odd.length === k) res += odd[0] - last + 1;         
    }
   return res;  
};