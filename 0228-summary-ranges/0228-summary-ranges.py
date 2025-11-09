class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        answer = []
        idx = 0
        while idx < len(nums):
            cur = nums[idx]
            while idx + 1 < len(nums) and nums[idx + 1] == nums[idx] + 1:
                idx += 1
            last = nums[idx]
            if cur == last:
                answer.append(str(cur))
            else:
                answer.append(str(cur) + "->" + str(last))
            idx += 1
        return answer
