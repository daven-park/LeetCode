/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let res = [-1, -1];

    while (left < right) {
        let middle = Math.floor((left + right) / 2);

        if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }

    if (nums[left] != target) {
        return res;
    }

    res[0] = left;

    right = nums.length - 1;

    while (left < right) {
        let middle = Math.floor((left + right) / 2) + 1;
        if (nums[middle] <= target) {
            left = middle;
        } else {
            right = middle - 1;
        }
    }

    res[1] = right;

    return res;
};