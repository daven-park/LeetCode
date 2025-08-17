class Solution:
    def minNumberOperations(self, target: List[int]) -> int:
        ans = 0
        prev = 0
        for n in target:
            if n > prev:
                ans += n - prev
            prev = n
        return ans