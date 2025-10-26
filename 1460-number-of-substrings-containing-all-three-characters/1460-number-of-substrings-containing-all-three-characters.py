class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        left, right = 0, 0
        count = [0] * 3
        for i in range(len(s)):
            count[ord(s[i]) - ord('a')] += 1 

            while count[0] > 0 and count[1] > 0 and count[2] > 0:
                    right += len(s) - i  
                    count[ord(s[left]) - ord('a')] -= 1  
                    left += 1 
        return right