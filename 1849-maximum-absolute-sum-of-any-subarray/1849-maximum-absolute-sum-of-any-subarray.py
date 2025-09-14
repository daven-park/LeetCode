class Solution:
    def maxAbsoluteSum(self, nums: List[int]) -> int:
        current = 0
        ans = 0

        prefix_max = 0
        prefix_min = 0

        for num in nums:
            current += num
            ans = max(ans, abs(current - prefix_max), abs(current - prefix_min))
            prefix_max = max(prefix_max, current)
            prefix_min = min(prefix_min, current)

        return ans