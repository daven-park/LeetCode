from collections import deque
import sys

class Solution:
    def getAncestors(self, n: int, edges: List[List[int]]) -> List[List[int]]:
        ans = [set() for _ in range(n)]
        adjlist = {i: [] for i in range(n)}
        in_degree = [0] * (n)
        for s, e in edges:
            adjlist[s].append(e)
            in_degree[e] += 1
        queue = deque([idx for idx, num in enumerate(in_degree) if num == 0])
        while queue:
            curr = queue.popleft()
            for neighbor in adjlist[curr]:
                ans[neighbor].update(ans[curr])
                ans[neighbor].add(curr)
                in_degree[neighbor] -= 1
                if in_degree[neighbor] == 0:
                    queue.append(neighbor)

        for i in range(n):
            ans[i] = sorted(ans[i])

        return ans