/**
 * @param {number} startPos
 * @param {number} endPos
 * @param {number} k
 * @return {number}
 */
var numberOfWays = function(startPos, endPos, k) {
    const mod = 1e9 + 7;
    const getKey = (i, j) => `${i},${j}`;
    const dp = new Map();

    const solve = (start, target, k, dp) => {
        if (k < 0) return 0;
        
        if (start === target && k === 0) return 1;
        
        if (dp.has(getKey(start,k))) return dp.get(getKey(start,k));

        const ans = (solve(start+1, target, k-1, dp) % mod + solve(start-1, target, k-1, dp) % mod) % mod;
        dp.set(getKey(start, k), ans);
        return ans;
    };
    
    return solve(startPos, endPos, k, dp, k);
};
