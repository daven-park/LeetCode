from collections import defaultdict
class Solution:
    def sumOfUnique(self, nums: List[int]) -> int:
        sum = 0
        counter = defaultdict(int)
        for number in nums:
            counter[number] += 1

        for key in counter:
            if counter[key] == 1:
                sum += key
        return sum
