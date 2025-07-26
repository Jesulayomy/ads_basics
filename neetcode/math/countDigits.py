# integer num, find the no of digits in num that divide num

class Solution:
    def countDigits(self, num: int) -> int:
        str_num = str(num)
        dividing_digits = 0
        for digit in str_num:
            if num % int(digit) == 0:
                dividing_digits += 1
        return dividing_digits
