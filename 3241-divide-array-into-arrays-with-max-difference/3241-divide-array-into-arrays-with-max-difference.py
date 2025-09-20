class Solution:
    def divideArray(self, nums: List[int], k: int) -> List[List[int]]:
        sort_nums = sorted(nums)
        divide = []
        for i in range(0, len(nums) - 2, 3):
            if sort_nums[i + 2] - sort_nums[i] > k or sort_nums[i + 1] - sort_nums[i] > k or sort_nums[i + 2] - sort_nums[i + 1] > k:
                return []
            divide.append([sort_nums[i], sort_nums[i + 1], sort_nums[i + 2]])
        return divide