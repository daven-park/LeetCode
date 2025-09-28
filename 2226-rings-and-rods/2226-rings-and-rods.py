from collections import defaultdict
class Solution:
    def countPoints(self, rings: str) -> int:
        rod = defaultdict(set)
        answer = 0
        for i in range(0, len(rings), 2):
            ch = rings[i]
            number = rings[i + 1]
            rod[number].add(ch)

        for i in rod:
            if len(rod[i]) >= 3:
                answer += 1

        return answer