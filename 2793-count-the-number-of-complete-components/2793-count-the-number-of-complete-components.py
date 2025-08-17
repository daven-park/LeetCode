from collections import deque, defaultdict

class Solution:
    def countCompleteComponents(self, n: int, edges: List[List[int]]) -> int:
        ans = 0
        graph = defaultdict(list)
        visited = [False] * n
        for edge in edges:
            u, v = edge
            graph[u].append(v)
            graph[v].append(u)

        def bfs(node):
            queue = deque([])
            visited[node] = True
            queue.append(node)
            nodes = [node]
            edge_cnt = 0
            while queue:
                current = queue.popleft()
                for neighbor in graph[current]:
                    edge_cnt += 1
                    if not visited[neighbor]:
                        visited[neighbor] = True
                        queue.append(neighbor)
                        nodes.append(neighbor)

            return edge_cnt // 2 == len(nodes) * (len(nodes) - 1) // 2

        for i in range(n):
            if not visited[i]:
                if not graph[i]:
                    ans += 1
                elif bfs(i):
                    ans += 1
        
        return ans

