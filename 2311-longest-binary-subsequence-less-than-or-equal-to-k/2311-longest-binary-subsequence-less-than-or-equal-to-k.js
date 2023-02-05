/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function(s, k) {
    const n = s.length
    let curValue = 0
    let result = ''
    
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === '0') {
            result += s[i]
            continue
        }
        if (curValue + Number(s[i]) * Math.pow(2, result.length) <= k) {
            curValue += Number(s[i]) * Math.pow(2, result.length)
            result = s[i] + result
        }
    }
    
    return result.length
};