class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        if rowIndex == 0: return [1]
            

        arr = [[1] for _ in range(rowIndex + 1)]
        arr[1].append(1)
        for i in range(2, rowIndex + 1):
            for j in range(1, i + 1):
                if j == i:
                    arr[i].append(1)
                else:
                    arr[i].append(arr[i-1][j-1] + arr[i-1][j])
        return arr[rowIndex]