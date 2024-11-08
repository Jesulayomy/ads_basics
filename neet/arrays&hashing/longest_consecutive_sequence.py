class Solution(object):
    def longestConsecutive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        numberSet = set(nums)
        longestSet = 0

        for n in nums:
            length = 1
            if (n - 1) not in numberSet:
                print(n, end='')
                while n + length in numberSet:
                    print(" -> ", n + length, end='')
                    length += 1
            print()
            longestSet = length if length > longestSet else longestSet
        return longestSet


soln = Solution()
test = [100, 4, 200, 1, 3, 2]

print(soln.longestConsecutive(test))
