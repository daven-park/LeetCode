class Solution:
    def maxDistToClosest(self, seats: List[int]) -> int:
        max_dist = 0
        prev = -1
        for i in range(len(seats)):
            distance = 0
            if seats[i]:
                distance = i if prev < 0 else (i - prev) // 2
                max_dist = max(max_dist, distance)
                prev = i
        return max(max_dist, len(seats) - prev - 1)