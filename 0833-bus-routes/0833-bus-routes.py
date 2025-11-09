from collections import deque
class Solution:
    def numBusesToDestination(self, routes: List[List[int]], source: int, target: int) -> int:
        if source == target: return 0

        graph = {}
        for bus, route in enumerate(routes):
            for stop in route:
                if stop in graph:
                    graph[stop].add(bus)
                else:
                    graph[stop] = {bus}
        
        if source not in graph: 
            return -1

        visited_stop = set()
        visited_bus = set()

        q = deque()

        visited_stop.add(source)
        q.append(source)

        stop_cnt = 0

        while q:
            for _ in range(len(q)):
                curr = q.popleft()
                if curr == target:
                    return stop_cnt
                
                for bus in graph[curr]:
                    if bus not in visited_bus:
                        for stop in routes[bus]:
                            if stop not in visited_stop:
                                visited_stop.add(stop)
                                q.append(stop)
                        visited_bus.add(bus)
            stop_cnt += 1
        return -1