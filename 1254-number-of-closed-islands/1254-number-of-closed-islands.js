/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    let cnt = 0;
    let r = grid.length;
    let c = grid[0].length;
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === 0){
                if(solve(i, j)) cnt++;
            }
        }
    }
    
    function solve(i, j){
        if (i < 0 || j < 0 || i >= r || j >= c) return false;
        if (grid[i][j]) return true;
        grid[i][j] = true;

        let top = solve(i - 1, j)
        let bottom = solve(i + 1, j)
        let left = solve(i, j - 1)
        let right = solve(i, j + 1);
        return top && bottom && left && right;
    }
    return cnt;
};