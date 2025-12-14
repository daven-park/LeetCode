class Solution:
    def countPartitions(self, nums: List[int]) -> int:
        left = 0
        right = sum(nums)
        ret = 0

        for i in range(len(nums) - 1):
            left += nums[i]
            right -= nums[i]

            if right % 2 == left % 2:  
                ret += 1

        return ret