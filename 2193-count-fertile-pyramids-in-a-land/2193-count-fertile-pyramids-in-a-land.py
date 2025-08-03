class Solution:
    def countPyramids(self, grid: List[List[int]]) -> int:
        m = len(grid)
        n = len(grid[0])
        ans = 0

        for i in range(1, m):
            for j in range(1, n - 1):
                if grid[i][j] and grid[i - 1][j]:
                    grid[i][j] = min(grid[i - 1][j - 1], grid[i - 1][j + 1]) + 1
                    ans += grid[i][j] - 1

        for i in range(1, n - 1):
            if grid[-1][i] > 1:
                grid[-1][i] = 1

        for i in range(m - 2, -1, -1):
            for j in range(1, n - 1):
                if grid[i][j] and grid[i + 1][j]:
                    grid[i][j] = min(grid[i + 1][j - 1], grid[i + 1][j + 1]) +1
                    ans += grid[i][j] - 1
                elif grid[i][j] > 1:
                    grid[i][j] = 1
        
        return ans
