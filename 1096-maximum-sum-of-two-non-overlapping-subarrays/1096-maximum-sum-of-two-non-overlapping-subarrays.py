class Solution:
    def maxSumTwoNoOverlap(self, nums: List[int], firstLen: int, secondLen: int) -> int:
        n = len(nums)
        p = [0]*(n+1)

        for i in range(1, n+1):
            p[i] = p[i-1] + nums[i-1]
        
        def maxSum(k, t):
            ans = maxk = 0
            for i in range(k, n-t+1):
                ksum = p[i] - p[i-k]
                maxk = max(maxk, ksum)
                tsum = p[i+t] - p[i]
                ans = max(ans, maxk + tsum)
            return ans
        
        return max(maxSum(firstLen, secondLen), maxSum(secondLen, firstLen))