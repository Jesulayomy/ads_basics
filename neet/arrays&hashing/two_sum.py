"""
Two Sum
- Brute Force. TC: O(n2)
- Hashmap numbers to their indexes, compare the
difference between target if it exists in the hashmap
TC: O(n) SC: O(n)
https://leetcode.com/problems/two-sum/
"""
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        prevMap = {}
        for i, n in enumerate(nums):
            diff = target - n
            if diff in prevMap:
                return [prevMap[diff], i]
            prevMap[n] = i
