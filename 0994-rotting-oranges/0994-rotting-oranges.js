/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let queue = [];
    let time = 0;
    let orange = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) orange++;
            if (grid[i][j] === 2) queue.push([i, j]);
        }
    }

    while (queue.length !== 0 && orange) {
        let dR = [0,-1,0,1];
        let dC = [-1,0,1,0];
        
        let next = [];
        while (queue.length !== 0 ) {
            let current = queue.shift();
            for (let i = 0; i < dR.length; i++) {
                let nR = current[0] + dR[i];
                let nC = current[1] + dC[i];
                if (nR >= 0 && nC >= 0 && nR < grid.length && nC < grid[0].length) {
                    if (grid[nR][nC] === 1) {
                        grid[nR][nC] = 2;
                        orange--;
                        next.push([nR,nC]);
                    }
                }
            }
        }
        time++;
        queue = next;
    }

    return orange === 0 ? time : -1;
};