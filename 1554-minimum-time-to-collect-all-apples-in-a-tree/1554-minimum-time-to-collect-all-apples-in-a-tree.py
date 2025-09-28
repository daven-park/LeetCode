from collections import defaultdict


class Solution:
    def minTime(self, n: int, edges: List[List[int]], hasApple: List[bool]) -> int:
        # 무방향 트리
        tree = defaultdict(list)
        for u, v in edges:
            tree[u].append(v)
            tree[v].append(u)
        
        def dfs(node, parent):
            time = 0
            for child in tree[node]:
                if child != parent:
                    time += dfs(child, node)
            if (time or hasApple[node]) and node != 0:
                time += 2
            return time
        
        return dfs(0, None)