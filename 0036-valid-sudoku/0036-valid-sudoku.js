/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const boxCheck = (x, y, num) => {
        const startX = Math.floor(x / 3) * 3;
        const startY = Math.floor(y / 3) * 3;
        for (let i = startX; i < startX + 3; i++) {
            for (let j = startY; j < startY + 3; j++) {
                if (i === x && j === y) continue;  
                if (board[i][j] === num) return true;
            }
        }
        return false;
    };

    const validCheck = (x, y, num) => {
        for (let j = 0; j < 9; j++) {
            if (j !== y && board[x][j] === num) return false; 
        }
        for (let i = 0; i < 9; i++) {
            if (i !== x && board[i][y] === num) return false; 
        }
        if (boxCheck(x, y, num)) return false; 
        return true;
    };

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== ".") {
                if (!validCheck(i, j, board[i][j])) return false; 
            }
        }
    }
    return true;  
};
