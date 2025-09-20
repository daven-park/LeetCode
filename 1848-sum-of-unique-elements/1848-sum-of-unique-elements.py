from collections import defaultdict
class Solution:
    def sumOfUnique(self, nums: List[int]) -> int:
        sum = 0
        for num in set(nums):
            if nums.count(num) == 1:
                sum += num
        return sum