class Solution:
    def eatenApples(self, apples: List[int], days: List[int]) -> int:
        heap = []
        n = len(apples)
        res = 0
        day = 0
        while day < n or heap:
            while heap and heap[0][0] <= day:
                heapq.heappop(heap)
            
            if day < n and apples[day] != 0:
                heapq.heappush(heap, [day + days[day], apples[day]])
            
            if heap:
                heap[0][1] -= 1
                res += 1 
                if heap[0][1] == 0:
                    heapq.heappop(heap)
            
            day += 1
        return res