class Solution:
    def countAndSay(self, n: int) -> str:
        if n == 1:
            return "1"
        string = "1"
        for _ in range(n - 1):
            ans = ""
            i = 0
            while i < len(string):
                cnt = 1
                while i + 1 < len(string) and string[i] == string[i + 1]:
                    cnt = cnt + 1
                    i = i + 1
                ans += str(cnt) + string[i]
                i += 1
            string = ans
        return string