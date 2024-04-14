/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let rowMax = [];
    let colMax = [];
    let len = grid.length;
    
    for(let i = 0; i < len; i++){
        rowMax.push(Math.max(...grid[i]))
    }

    for(let i = 0; i < len; i++){
        let max = -Infinity 
        for(let j = 0; j < len; j++){
            max = Math.max(grid[j][i], max)
        }
        colMax.push(max)
    }

    let res = 0;
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
             let min = Math.min(colMax[j], rowMax[i])
             res = res + min - grid[i][j]
        }
    }
    return res
};