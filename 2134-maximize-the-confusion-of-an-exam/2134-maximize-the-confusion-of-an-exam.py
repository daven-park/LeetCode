class Solution:
    def maxConsecutiveAnswers(self, answerKey: str, k: int) -> int:
        cnt = {"T": 0, "F" : 0}
        ans = 0
        i = 0
        for j in range(len(answerKey)):
            cnt[answerKey[j]] += 1
            while cnt["T"] > k and cnt["F"] > k:
                cnt[answerKey[i]] -= 1
                i += 1
            ans = max(ans, j-i + 1)
        return ans