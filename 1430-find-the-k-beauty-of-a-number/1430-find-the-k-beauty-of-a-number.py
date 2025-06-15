class Solution:
    def divisorSubstrings(self, num: int, k: int) -> int:
        # length k, divisor of num
        answer = 0
        num_to_str = str(num)
        for i in range(0, len(num_to_str) - k + 1):
            can_divisor = num_to_str[i:i + k]
            if int(can_divisor) == 0:
                continue
            if num % int(can_divisor) == 0:
                answer += 1

        return answer