class Solution:
    def minimumSize(self, nums: List[int], maxOperations: int) -> int:
        left = 1
        right = max(nums)

        while left < right:
            mid = (left + right) // 2   

            oper = 0
            for x in nums: 
                oper += (x - 1) // mid
                
            if oper > maxOperations:
                left = mid + 1
            else:
                right = mid
    
        return left