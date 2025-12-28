class Solution:
    def findPeaks(self, mountain: List[int]) -> List[int]:
        ans = []

        prev = mountain[0]
        for i in range(1, len(mountain) - 1):
            if prev < mountain[i] and mountain[i] > mountain[i + 1]:
                ans.append(i)
            prev = mountain[i]
        return ans