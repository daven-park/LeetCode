/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVII = function(stones) {
    let N = stones.length;
    let pre = [...stones];
    for(let i = 1; i < N; i++){
        pre[i] += pre[i - 1];
    };

    let dp = Array.from(Array(N), () => Array(N).fill(0));

    for(let n = 1; n < N; n++){
        for(let i = 0; i < N - n; i++){
            let j = i + n;

            dp[i][j] = Math.max(
            pre[j - 1] - (pre[i - 1] || 0) - dp[i][j - 1], 
            pre[j] - pre[i] - dp[i + 1][j]);
        }
    }
    return dp[0][N - 1];
};