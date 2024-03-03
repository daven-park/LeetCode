/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
    const n = grid.length;
    const m = grid[0].length;
    const dirs = {
        1: [0, 1],
        2: [0, -1],
        3: [1, 0],
        4: [-1, 0],
    };

    let cost = 0;
    const queue = [];
    const dp = new Array(n).fill().map((_) => new Array(m).fill());
    const dfs =(i, j, n, m, queue, dirs, grid, dp, cost) => {
        if (i < 0 || i >= n || j < 0 || j >= m || dp[i][j] !== undefined) return;

        queue.push([i, j]); // to explore later
        dp[i][j] = cost;
        const curr = grid[i][j];
        const ni = i + dirs[curr][0];
        const nj = j + dirs[curr][1];

        dfs(ni, nj, n, m, queue, dirs, grid, dp, cost);
    }
    
  dfs(0, 0, n, m, queue, dirs, grid, dp, cost);

  while (queue.length) {
    cost++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [oi, oj] = queue.shift();
      for (const dir of Object.values(dirs)) {
        const ni = oi + dir[0];
        const nj = oj + dir[1];
        dfs(ni, nj, n, m, queue, dirs, grid, dp, cost);
      }
    }
  }

  return dp[n - 1][m - 1];
};

