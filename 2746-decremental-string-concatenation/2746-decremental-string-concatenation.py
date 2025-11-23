class Solution:
    def minimizeConcatenatedLength(self, words: List[str]) -> int:
        N = len(words)

        @cache
        def calc(index, prevfirst, prevlast):
            if index == N: return 0

            best = float("inf")

            if words[index][-1] == prevfirst:
                best = min(best, calc(index + 1, words[index][0], prevlast) + len(words[index]) - 1)
            else:
                best = min(best, calc(index + 1, words[index][0], prevlast) + len(words[index]))
            
            if words[index][0] == prevlast:
                best = min(best, calc(index + 1, prevfirst, words[index][-1]) + len(words[index]) - 1)
            else:
                best = min(best, calc(index + 1, prevfirst, words[index][-1]) + len(words[index]))

            return best

        return calc(1, words[0][0], words[0][-1]) + len(words[0])