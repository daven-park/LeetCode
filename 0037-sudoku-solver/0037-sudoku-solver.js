/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const isValid = (board, i, j, l) => {
        for (let p = 0; p < board.length; p++) {
            if (board[i][p] === l) return false
            if (board[p][j] === l) return false

            let val = board[3 * Math.floor(i/3) + Math.floor(p/3)][3 * Math.floor(j/3) + p % 3]
            if (val === l) return false
        }
        return true
    }
    
      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === '.') {
                for (let l = 1; l < 10; l++) {
                    if (isValid(board, i, j, l.toString())) {
                        board[i][j] = l.toString()
                        let sol = solveSudoku(board)
                        if (sol !== false) return sol   
                        board[i][j] = '.'                     
                    }
                }
                return false                                 
            }
        }
    }
    return board
};