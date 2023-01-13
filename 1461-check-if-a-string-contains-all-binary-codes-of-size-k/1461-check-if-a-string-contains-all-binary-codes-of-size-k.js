/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    let set = new Set();
     for(let i = 0; i < s.length - k + 1; i++){
         set.add(s.substring(i, i + k));
     }
    
    return set.size === Math.pow(2, k)
};