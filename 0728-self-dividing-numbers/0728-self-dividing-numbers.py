class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        answer = []
        for i in range(left, right + 1):
            num = i
            flag = True
            while num != 0:
                digit = num % 10
                if digit == 0 or i % digit != 0:
                    flag = False
                    break
                num //= 10
            if flag: answer.append(i)
        return answer