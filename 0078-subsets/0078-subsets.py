class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        answer = []
        for mask in range(1 << len(nums)):
            subset = []
            for i in range(len(nums)):
                if mask & (1 << i):
                    subset.append(nums[i])
            answer.append(subset)
        return answer