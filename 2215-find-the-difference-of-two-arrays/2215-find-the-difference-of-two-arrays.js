/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let nums1Set = new Set(nums1)
    let nums2Set = new Set(nums2)

    let result = [[], []]
    for (num of nums1Set) {
        if (!nums2Set.has(num)) result[0].push(num)
    }

    for (num of nums2Set) {
        if (!nums1Set.has(num)) result[1].push(num)
    }

    return result
};