class Solution:
    """
    Defeated by left and right pointers and computing area
    """
    def containerWithMostWater(self, height):
        mostWater = 0
        left = 0
        right = len(height) - 1
        while left < right:
            leftHeight = height[left]
            rightHeight = height[right]

            area = (right - left) * min(leftHeight, rightHeight)
            if area > mostWater:
                mostWater = area

            if leftHeight < rightHeight:
                left += 1
            else:
                right -= 1
        return mostWater


class Solution2:
    def containerWithMostWater(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        mostWater = 0
        width = len(height)
        for left in range(width):
            for right in range(left + 1, width):
                area = (right - left) * min(height[right], height[left])
                if area > mostWater:
                    mostWater = area
        return mostWater

soln = Solution()
test = [1,8,6,2,5,4,8,3,7]

result = soln.containerWithMostWater(test)
print(result)
