"""
Group Anagrams
- Sorting
- Hash table
https://leetcode.com/problems/group-anagrams/description/
"""
from collections import defaultdict

# Sorting
class Solution:
    def groupAnagrams(self, strs):
        res = defaultdict(list)
        for string in strs:
            print(res)
            sortedS = ''.join(sorted(string))
            res[sortedS].append(string)
        return res.values()

# Hash Table
class Solution2(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        result = defaultdict(list)

        for string in strs:
            count = [0] * 26
            print(string)
            print(count)
            for c in string:
                print(c)
                count[ord(c) - ord("a")] += 1
                print(count)
            print(count)
            print(tuple(count))
            result[tuple(count)].append(string)
            print(result)
            print("===========================")
        return result.values()


lst = ["eat","tea","tan","ate","nat","bat"]
soln = Solution2()

soln.groupAnagrams(lst)
