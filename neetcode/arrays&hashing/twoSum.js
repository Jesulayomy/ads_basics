function twoSum(nums, target) {
  const remainders = {};
  for (let i = 0; i < nums.length; i++) {
    if (remainders[nums[i]]) {
      return [remainders[nums[i]], i];
    } else {
      remainders[target - nums[i]] = i;
    }
  }
  console.log(remainders);
  return []
}

console.log(twoSum([1, 2, 3, 4], 8));
