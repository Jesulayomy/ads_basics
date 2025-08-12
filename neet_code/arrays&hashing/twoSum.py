from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(len(nums)):
                if i == j:
                    continue
                if nums[i] + nums[j] == target:
                    return [i, j]
        return []
    
    def twoSumTwo(self, nums: List[int], target: int) -> List[int]:
        store = {}
        for idx in range(len(nums)):
            if nums[idx] in store.keys():
                return [store[nums[idx]], idx]
            else:
                store[target - nums[idx]] = idx
        print(store)
        return []



if __name__ == "__main__":
    nums = [2,7,11,15]
    target = 18
    soln = Solution()
    print(soln.twoSum(nums, target))
    print(soln.twoSumTwo(nums, target))
