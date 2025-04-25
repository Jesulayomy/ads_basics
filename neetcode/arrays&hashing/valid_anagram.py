"""
Valid Anagram
- Sort and compare
- Hashmap comparing letters manually
https://leetcode.com/problems/valid-anagram/description/
"""
# Sort
class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        u = list(s)
        u.sort()
        v = list(t)
        v.sort()
        if u == v:
            return True
        return False

# Hash Map
class Solution2(object):
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        count = [0] * 26
        for i in range(len(s)):
            count[ord(s[i]) - ord('a')] += 1
            count[ord(t[i]) - ord('a')] -= 1

        for val in count:
            if val != 0:
                return False
        return True