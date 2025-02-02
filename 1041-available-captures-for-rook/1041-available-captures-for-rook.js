/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    const dx = [0, 0, -1, 1];
    const dy = [1, -1, 0, 0];
    let pos = null;
    let ans = 0;
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            if(board[i][j] === 'R'){
                pos = [i, j];
            }
        }
    }

    const dfs = (x, y, dir) => {
        let nx = dx[dir] + x;
        let ny = dy[dir] + y;
        if(nx < 0 || ny < 0 || nx >= 8 || ny >= 8) return;

        if(board[nx][ny] === 'p'){
            ans++
            return;
        }
        if(board[nx][ny] === 'B'){
            return;
        }
        return dfs(nx, ny, dir);
    }

     for(let d = 0; d < 4; d++){
            dfs(pos[0], pos[1], d)
    }
    return ans
};