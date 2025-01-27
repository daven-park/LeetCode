/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    
    const dfs = (x, y, index) => {
        if (index === word.length) return true;
        if (
            x < 0 || y < 0 || 
            x >= board.length || y >= board[0].length || 
            board[x][y] !== word[index]
        ) return false;

        const temp = board[x][y];
        board[x][y] = '#'; // 방문 표시

        for (let d = 0; d < 4; d++) {
            if (dfs(x + dx[d], y + dy[d], index + 1)) return true;
        }

        board[x][y] = temp; // 복원
        return false;
    };

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                return true;
            }
        }
    }
    return false;

};