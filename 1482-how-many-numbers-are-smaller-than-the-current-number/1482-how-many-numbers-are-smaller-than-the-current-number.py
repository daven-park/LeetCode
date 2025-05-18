class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        ans = [0] * len(nums)
        for i in range(0, len(nums)):
            current = nums[i]
            for j in range(0, len(nums)):
                if i == j: continue

                if nums[j] < current:
                    ans[i] += 1
        return ans
        