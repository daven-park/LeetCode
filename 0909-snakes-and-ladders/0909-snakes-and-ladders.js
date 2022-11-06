/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    let n = board.length;
    
    let seen = new Set();
    let queue = [[1, 0]];
    
    while(queue.length){
        let [label, step] = queue.shift();
        
        let [row, col] = getPos(label, n);
        
        if(board[row][col] !== -1){
            label = board[row][col];
        }
        
        if(label === n * n){
            return step;
        }
        for(let i = 1; i < 7; i++){
            let next = label + i;
            if(next <= n * n && !seen.has(next)){
                seen.add(next);
                queue.push([next, step + 1]);
            }
        }
    }
    return -1;
};

const getPos = (label, n) => {
    let row = Math.floor((label - 1) / n);
    let col = (label - 1) % n;
    return row % 2 === 0 ? [n - 1 - row, col] : [n - 1 - row, n - 1 - col];
}