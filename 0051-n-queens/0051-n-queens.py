class Solution:
    def solveNQueens(self, N: int) -> List[List[str]]:
        answer = []
        pos = [0] * N
        flag_a = [False] * N
        flag_b = [False] * (N * 2 - 1)
        flag_c = [False] * (N * 2 - 1)

        def put():
            board = []
            for i in range(N):
                row = ['.'] * N
                row[pos[i]] = 'Q'
                board.append("".join(row))
            answer.append(board)

        def setting(i):
            for j in range(N):
                if (not flag_a[j] and not flag_b[i + j] and not flag_c[i - j + N - 1]):
                    pos[i] = j
                    if i == N - 1:
                        put()
                    else:
                        flag_a[j] = flag_b[i + j] = flag_c[i - j + N - 1] = True
                        setting(i + 1)
                        flag_a[j] = flag_b[i + j] = flag_c[i - j + N - 1] = False

        setting(0)

        return answer
        
