"""
Leetcode Link
- You can bruteforce by looping twice
- Sort first and compare once
- Use a set() and check if each item exists in the set before adding
https://leetcode.com/problems/contains-duplicate/description/
"""
# set()
class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        Time Complexity  - O(n)
        Space Complexity - O(n)
        """
        fake = set()
        for i in nums:
            if i in fake:
                return True
            fake.add(i)
        return False
