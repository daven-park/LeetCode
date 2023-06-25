/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let map = {};
    
    for(num of arr) map[num] = (map[num] || 0) + 1;
    
    for(const key in map) if(map[key] > arr.length / 4) return key;
};