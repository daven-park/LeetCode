/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let ans = [];
    let dx = [0, 1, 0, -1];
    let dy = [1, 0, -1 ,0];
    let dir = 0;
    
    let x = 0, y = 0;
    
    let row = matrix.length;
    let col = matrix[0].length;
    let len = row * col;
    let vis = Array.from(new Array(row), () => new Array(col).fill(false));
    
    ans.push(matrix[x][y]);
    vis[x][y] = true;
    
    while(true){
        if(ans.length === len) break;
        
        let nx = dx[dir] + x;
        let ny = dy[dir] + y;
        
        if(nx < 0 || ny < 0 || nx >= row || ny >= col || vis[nx][ny]){
            dir = (dir + 1) % 4;   
            continue;
        }
        
        ans.push(matrix[nx][ny]);
        vis[nx][ny] = true;
        x = nx;
        y = ny;

    }
    return ans
};