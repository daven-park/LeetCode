/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    let n = board.length;
    
    let visited = new Set();
    let queue = [[1, 0]];
    
    while(queue.length){
        let [label, step] = queue.shift();
        
        let [row, col] = getPos(label, n);
        
        if(board[row][col] !== -1){ // 사다리 또는 뱀
            label = board[row][col]; // 해당 위치로 이동
        }
        
        if(label === n * n){ // 게임 종료
            return step;
        }
        for(let i = 1; i < 7; i++){
            let next = label + i;   // 
            if(next <= n * n && !visited.has(next)){
                visited.add(next);
                queue.push([next, step + 1]);
            }
        }
    }
    return -1;
};

const getPos = (label, n) => { // 다음 위치 구하기. 세로가 짝수면 우측으로, 홀수면 좌측으로 이동
    let row = Math.floor((label - 1) / n);
    let col = (label - 1) % n;
    return row % 2 === 0 ? [n - 1 - row, col] : [n - 1 - row, n - 1 - col];
}