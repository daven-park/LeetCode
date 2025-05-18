class Solution:
    def countBadPairs(self, nums: List[int]) -> int:
        maps = defaultdict(int)
        n = len(nums)
        
        for i in range(n):
            maps[nums[i] - i] += 1
        
        pair = sum((count * (count - 1)) // 2 for count in maps.values())
        
        return (n * (n - 1) // 2) - pair