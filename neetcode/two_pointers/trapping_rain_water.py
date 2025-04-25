
class Solution:
    def trap(self, height):
        if not height:
            return 0
        # Initialize two pointers at the edges
        left, right = 0, len(height) - 1
        # Get the heights of the left and right edges
        leftMax, rightMax = height[left], height[right]
        result = 0

        while left < right:
            # if the right max height so far is greater
            if leftMax < rightMax:
                # Shift the left
                left += 1
                # set the new left max height to be max between itself and the left height 
                leftMax = max(leftMax, height[left])
                # the water unit is the left max height - the current height (Always +ve since we updated leftMax first)
                result += leftMax - height[left]
            else:
                right -= 1
                rightMax = max(rightMax, height[right])
                result += rightMax - height[right]

        return result


soln = Solution()
height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

result = soln.trap(height)
