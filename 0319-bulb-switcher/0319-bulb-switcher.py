class Solution:
    def bulbSwitch(self, n: int) -> int:
        cnt, i = 0, 1

        while i * i <= n:
            cnt +=1
            i += 1
        return cnt
        