class Solution:
    def shortestPalindrome(self, s: str) -> str:
        if s == "": return ""
        reverse_str = s[::-1]
        for i in range(len(s)):
            if s.startswith(reverse_str[i:]):
                return reverse_str[:i] + s