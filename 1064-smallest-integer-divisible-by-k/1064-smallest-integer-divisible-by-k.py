class Solution:
    def smallestRepunitDivByK(self, k: int) -> int:
        n = 1
        check = set()
        i = 1
        while True:
            R = n % k
            if R == 0 : return i
            if R in check: return -1
            check.add(R)
            n = R * 10 + 1
            i += 1