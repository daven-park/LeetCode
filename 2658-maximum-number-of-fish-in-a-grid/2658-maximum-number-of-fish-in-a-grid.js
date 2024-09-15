/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let max = 0;

    let dfs = (i, j) => {
        if(i < 0 || j < 0 || i > m - 1 || j > n - 1 || grid[i][j] == 0) return 0;
        let cur = grid[i][j];
        grid[i][j] = 0;
        return cur + dfs(i - 1, j) + dfs(i, j - 1) + dfs(i + 1, j) + dfs(i, j + 1);
    }

    for(let x = 0; x < m; x++){
        for(let y = 0; y < n; y++){
            if(grid[x][y] !== 0){
               max = Math.max(max, dfs(x, y));
            }
        }
    }
    return max;
};