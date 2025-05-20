
function binarySearch(nums, search) {
  if (nums.length === 0) {
    console.log('There is no ' + search + ' in the list of numbers');
    return false;
  }
  const mid = Math.floor(nums.length / 2);
  console.log(`Is ${search} at the mid(${mid}) of ${nums}?`);
  if (nums[mid] > search) {
    console.log('No');
    return binarySearch(nums.slice(0, mid), search);
  } else if (nums[mid] < search) {
    console.log('No');
    return binarySearch(nums.slice(mid + 1), search);
  } else {
    console.log('Yes');
    return true;
  }
};
const nums = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16];

binarySearch(nums, 3);
binarySearch(nums, 8);
binarySearch(nums, 14);
binarySearch(nums, 7);
