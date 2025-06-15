# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque
class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        queue = deque([root])
        answer = []
        lrflag = True
        while queue:
            level = len(queue)
            temp = []
            for _ in range(level):
                current = queue.popleft()
                temp.append(current.val)
                
                if current.left:
                    queue.append(current.left)
                if current.right:
                    queue.append(current.right)

            if lrflag:
                answer.append(temp)
            else:
                answer.append(temp[::-1])
            lrflag = not lrflag

        return answer


