class Solution:
    def toHex(self, num: int) -> str:
        string = "0123456789abcdef"
        ans = ''
        if num < 0:
            num += 2 ** 32
        
        while num > 0:
            ans = string[num % 16] + ans
            num //= 16
        return ans if ans else '0'