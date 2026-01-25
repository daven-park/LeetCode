class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        cnt = 0
        checked = set(list(allowed))
        for word in words:
            for ch in word:
                if ch not in checked:
                    cnt += 1
                    break
        return len(words) - cnt