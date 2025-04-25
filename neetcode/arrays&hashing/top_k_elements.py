"""
Top K Sorted Elements
- Use a count:values bucket sort where values are a list of values having frequency(count)
https://leetcode.com/problems/top-k-frequent-elements/description/
"""


class Solution(object):
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        count = {}
        freq = [[] for i in range(len(nums) + 1)]
        print("Frequency: ", freq)
        print("=============================")
        print("Counting the items with a bucket")
        for n in nums:
            print(f"Count[{n}]: ", 1 + count.get(n, 0))
            count[n] = 1 + count.get(n, 0)
            print(count)
        print("=============================")
        print("Inserting the values in the corresponding freq index")
        for n, c in count.items():
            print(f"Frequency[{c}]: ", n)
            freq[c].append(n)
        print(f"Frequency: {freq}")

        res = []
        for i in range(len(freq) - 1, 0, -1):
            for n in freq[i]:
                res.append(n)
                print(f"Top elements: {len(res)}/{k}: ", res)
                if len(res) == k:
                    return res


elements = [1,1,1,2,2,3,1,3,4,2,4,5,7,3,3,6,3,2,5,3,5,3,6,7,5,2,4,6,2,2,6,7,8,6,4,3,2]

soln = Solution()
soln.topKFrequent(elements, 5)
