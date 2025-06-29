# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def nodesBetweenCriticalPoints(self, head: Optional[ListNode]) -> List[int]:
        
        cnt = 1
        prev = head
        current = head.next
        indexes = []
        while current and current.next:
            if current.val > prev.val and current.val > current.next.val:
                indexes.append(cnt)
            
            if current.val < prev.val and current.val < current.next.val:
                indexes.append(cnt)

            prev = current
            current = current.next
            cnt += 1

        if len(indexes) < 2:
            return [-1, -1]
        
        min_diff = float('inf')
        for i in range(1, len(indexes)):
            min_diff = min(min_diff, indexes[i] - indexes[i - 1])

        return [min_diff,abs(indexes[-1] - indexes[0])]
        