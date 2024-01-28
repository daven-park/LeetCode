/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function(s, k) {
    let dp = Array(26).fill(0);
    for(let c of s) {
        let max = 0;
        let i = c.charCodeAt() - 97;
        
        for(let j = 0; j < 26; j++){
            if(Math.abs(i - j) <= k) {
                max = Math.max(max, dp[j]);
            }
        }
        dp[i] = max + 1;
    }
    return Math.max(...dp);
};