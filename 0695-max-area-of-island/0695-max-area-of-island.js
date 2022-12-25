/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max = 0;
    
    const dfs = (grid, x, y) => {
        if(x >= grid.length || y >= grid[0].length || x < 0 || y < 0 || grid[x][y] !== 1) return 0;

        grid[x][y] = 2;

        return 1 + dfs(grid, x + 1, y) + dfs(grid, x - 1, y) + dfs(grid, x, y + 1) + dfs(grid, x, y - 1);
    }   
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            max = Math.max(max, dfs(grid, i, j));
        }
    }
    return max;
};

