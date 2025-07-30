# 
from collections import defaultdict


class Solution:
    # nums = [51,71,17,24,42]
    def maxSum(self, nums):
        max_digit_store = defaultdict(list)
        maxSum = 0

        # for each number in the nums array 51, 71, ...
        for number in nums:
            max_number_digit = int(max(str(number)))
            # store[5] = [51]
            # store[7] = [71, 17]
            max_digit_store[max_number_digit].append(number)

        for max_digit in max_digit_store:
            if len(max_digit_store[max_digit]) > 1:
                # Sort the list of number with this max digit
                max_digit_store[max_digit].sort()
                maxSum = max(maxSum, max_digit_store[max_digit][-1] + max_digit_store[max_digit][-2])
        if maxSum == 0:
            return -1
        return maxSum

