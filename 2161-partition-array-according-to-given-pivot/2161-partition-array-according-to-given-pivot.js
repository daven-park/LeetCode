/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let less = [];
    let more = [];
    let equal = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > pivot) {
          more.push(nums[i]);
        } else if (nums[i] < pivot) {
          less.push(nums[i]);
        } else {
          equal.push(nums[i]);
        }
    }

    return [...less, ...equal, ...more];
};