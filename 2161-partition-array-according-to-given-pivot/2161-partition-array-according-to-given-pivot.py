class Solution:
    def pivotArray(self, nums: List[int], pivot: int) -> List[int]:
        left, right, same = [], [], []

        for num in nums:
            if num < pivot:
                left.append(num)
            elif num > pivot:
                right.append(num)
            else:
                same.append(num)

        return left + same + right