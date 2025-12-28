class Solution:
    def bestRotation(self, nums: List[int]) -> int:
        n = len(nums)
        arr = [1] * n
        for i in range(n):
            arr[(i - nums[i] + 1) % n] -= 1
        arr = list(itertools.accumulate(arr))
        return arr.index(max(arr))