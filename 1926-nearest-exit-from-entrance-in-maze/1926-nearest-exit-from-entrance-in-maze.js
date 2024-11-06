/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
// wall = +, cell = .
var nearestExit = function(maze, entrance) {
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];
    let n = maze.length;
    let m = maze[0].length;
    
    let queue = [];
    queue.push([entrance[0], entrance[1], 0]);
    maze[entrance[0]][entrance[1]] = "+"
    
    while(queue.length) {
        let [curX, curY, steps] = queue.shift();   
        for(let dir = 0; dir < 4; dir++){
            let nx = dx[dir] + curX;
            let ny = dy[dir] + curY;
            
            if(nx < 0 || ny < 0 || nx >= n || ny >= m || maze[nx][ny] === "+") continue;
            if(isExit(nx, ny, n, m)) {
                return steps + 1;
            }
            maze[nx][ny] = "+";
            queue.push([nx, ny, steps + 1]);
        }
    }
    return - 1;
};

function isExit(nx, ny, n, m) {
    return nx === 0 || ny === 0 || nx === n - 1 || ny === m - 1
}