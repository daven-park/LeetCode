/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let freq = {}

    for (num of nums) {
        freq[num] != undefined ? freq[num] ++ : freq[num] = 1
    }
    return nums.sort((a, b) => freq[a] == freq[b] ? b - a : freq[a] - freq[b])

};