class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        board = [[0] * n for _ in range(n)]
        dx = [0, 1, 0, -1]
        dy = [1, 0, -1, 0]
        d = 0
        
        x, y = 0, 0
        cnt = 1
        while cnt <= n * n:
            board[x][y] = cnt
            cnt += 1
            nx = dx[d] + x
            ny = dy[d] + y
            if nx < 0 or ny < 0 or nx >= n or ny >= n or board[nx][ny] != 0:
                d = (d + 1) % 4
            nx = dx[d] + x
            ny = dy[d] + y
            x = nx
            y = ny
            
        return board