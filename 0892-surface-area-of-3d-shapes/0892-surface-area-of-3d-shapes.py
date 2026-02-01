class Solution:
    def surfaceArea(self, grid: List[List[int]]) -> int:
        N = len(grid)
        ans = 0

        for i in range(N):
            for j in range(N):
                h = grid[i][j]
                if h == 0: continue

                ans += 2 

                up = grid[i-1][j] if i > 0 else 0
                down = grid[i+1][j] if i < N-1 else 0
                left = grid[i][j-1] if j > 0 else 0
                right = grid[i][j+1] if j < N-1 else 0

                ans += max(h - up, 0)
                ans += max(h - down, 0)
                ans += max(h - left, 0)
                ans += max(h - right, 0)

        return ans