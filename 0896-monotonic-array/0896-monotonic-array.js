/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    if (nums.length < 2) return true;

    let dir = 0; 

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i-1]) {  
            if (dir === 0) dir = 1;
            else if (dir === -1) return false;
        } else if (nums[i] < nums[i-1]) { 
            if (dir === 0) dir = -1;
            else if (dir === 1) return false;
        }
    }

    return true; 
};