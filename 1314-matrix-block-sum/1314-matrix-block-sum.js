/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
    let dp = Array(mat.length + 1);
    dp[0] = Array(mat[0].length + 1).fill(0);
    
    for(let i = 0; i < mat.length; i++){
        dp[i+1] = [0];
        for(let j = 0; j < mat[0].length; j++){
            dp[i + 1][j + 1] = mat[i][j] + dp[i][j + 1] + dp[i + 1][j] - dp[i][j];
        }
    }
    
    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[0].length; j++){
            let r1 = Math.max(0, i - k), r2 = Math.min(mat.length - 1, i + k);
            let c1 = Math.max(0, j - k), c2 = Math.min(mat[0].length - 1, j + k);
            mat[i][j] = dp[r2 + 1][c2 + 1] - dp[r1][c2 + 1] - dp[r2 + 1][c1] + dp[r1][c1]
        }
    }
    return mat;
};