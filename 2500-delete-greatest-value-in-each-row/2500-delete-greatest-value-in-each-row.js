/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let ans = 0;
    
    grid.forEach((row) => row.sort((a,b) => b - a))
    
    while(grid[0].length > 0){
        let max = 0;
        for(let row of grid) max = Math.max(max, row.shift());
        ans += max;
    }
    return ans;
};