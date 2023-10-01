/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = [0];
    for(let i = 1; i <= n; i++){
        ans.push(ans[i >> 1] + (i & 1));
    }
    return ans;
};