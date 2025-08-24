# The rand7() API is already defined for you.
# def rand7():
# @return a random integer in the range 1 to 7

class Solution:
    def rand10(self):
        sum = 0
        for i in range(10):
            sum += rand7()
        return sum % 10 + 1