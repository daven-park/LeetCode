class Solution:
    def surfaceArea(self, grid: List[List[int]]) -> int:
        n = len(grid)
        ans = 0

        for i in range(n):
            for j in range(n):
                h = grid[i][j]
                if h > 0:
                    ans += 4 * h + 2
                    if i > 0:
                        ans -= 2 * min(h, grid[i-1][j])
                    if j > 0:
                        ans -= 2 * min(h, grid[i][j-1])

        return ans