class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
        stack = []
        for num in arr:
            if not stack or stack[-1] <= num:
                stack.append(num)
            else:
                temp = stack[-1]
                while stack and stack[-1] > num:
                    stack.pop()
                stack.append(temp)
        return len(stack)