/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freqMap = new Map();
    
    for(let num of nums){
        freqMap.set(num, freqMap.get(num) + 1 || 1)
    }
    
    const result = [];
    
    for(let [key, value] of freqMap) {
        result.push([key, value]);
    }
    
    result.sort((a, b) => b[1] - a[1]);
    return result.slice(0, k).map((x) => x[0]);
};