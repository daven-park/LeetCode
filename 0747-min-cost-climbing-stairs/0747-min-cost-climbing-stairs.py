class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        length = len(cost)
        dp = [1000] * length
        dp[0] = cost[0]
        dp[1] = cost[1]
        for i in range(2, length):
            dp[i] = min(dp[i - 1] + cost[i], dp[i - 2] + cost[i])

        return min(dp[-1], dp[-2])