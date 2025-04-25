function containsDuplicate(nums) {
  const exists = {};
  for (let num of nums) {
    if (exists[num]) {
      return true
    } else {
      exists[num] = true;
    }
  }
  return false;
}

console.log(containsDuplicate([4, 6, 2, 6, 2, 6, 7, 8, 5, 2, 4]));
console.log(containsDuplicate([4, 6, 2, 7, 8, 5]));