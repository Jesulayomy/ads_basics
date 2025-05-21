const num = [3, 1, 2];
const nums = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function mergeSort(nums) {
  if (nums.length === 1) {
    return nums;
  }
  console.log('Nums: ', nums);
  const midIndex = Math.floor(nums.length / 2);
  const leftNums = mergeSort(nums.slice(0, midIndex));
  const rightNums = mergeSort(nums.slice(midIndex));

  return merge(leftNums, rightNums);
};

function merge(left, right) {
  const sorted = [];
  const sortLength = left.length + right.length;
  console.log(`Merge left:`, left, `With right:`, right);

  while (sorted.length < sortLength) {
    if (right.length === 0) {
      // console.log('Right is empty, pushing left');
      sorted.push(left[0]);
      left.shift();
    } else if (left.length === 0) {
      // console.log('Left is empty, pushing right');
      sorted.push(right[0]);
      right.shift();
    } else if (left[0] <= right[0]) {
      // console.log('Left[0] is less than right[0], pushing left');
      sorted.push(left[0]);
      left.shift();
    } else {
      // console.log('Right[0] is less than left[0], pushing right');
      sorted.push(right[0]);
      right.shift();
    }
  }

  console.log('Sorted:', sorted);
  return sorted;
};

console.log(mergeSort(nums));
