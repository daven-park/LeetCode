/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    let n = grid.length;
    let m = grid[0].length;
    if(grid[0][0] === 1 || grid[n - 1][m - 1] === 1) return -1;

    let dir = [[1,0],[-1,0],[1,1],[-1,1],[0,1],[0,-1],[1,-1],[-1,-1]];
    
    let visited = Array(n).fill().map(i => Array(m).fill(0));
    let queue = [[0,0,1]];

    while(queue.length !== 0){
        let [x, y, k] = queue.shift();
        if(x === n-1 && y == m-1) return k
        
        for(let d of dir){
            let nx = x + d[0];
            let ny = y + d[1];
            if(nx >= 0 && ny >= 0 && nx < n && ny < m && grid[nx][ny] === 0 && visited[nx][ny] === 0){
                visited[nx][ny] = 1
                queue.push([nx, ny, k + 1]);
            }
        }
    }
    
    return -1
};