class Solution:
    def minimizedMaximum(self, n: int, quantities: List[int]) -> int:
        start = 1
        end = max(quantities)
        
        while start <= end:
            mid = start + (end - start) // 2
            total = sum((element // mid) + (1 if (element % mid) > 0 else 0) for element in quantities)
            
            if total <= n:
                end = mid - 1
            else:
                start = mid + 1

        return start