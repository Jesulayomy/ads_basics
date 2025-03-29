// It's the academic year's end, the fateful moment of your school report. 
// The averages must be calculated. 
// All the students come to you and entreat you to calculate their average for them. 
// Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.
// getAverage([2,2,2,2]),2)
// getAverage([1,2,3,4,5,]),3);
// getAverage([1,1,1,1,1,1,1,2]),1)

// function getAverage(scores) {
//   let total = 0;
//   for (let score of scores) {
//     total += score;
//   }
//   let average = total / (scores.length);
//   return Math.floor(average);
// }

function getAverage(scores) {
  let total = scores.reduce((sum, score) => sum + score, 0);
  let average = total / scores.length;
  return Math.floor(average);
}

console.log(getAverage([2,2,2,2]))
console.log(getAverage([1,2,3,4,5]))
console.log(getAverage([1,1,1,1,1,1,1,2]))


// P
// What are our parameters?
// An array of all scores
// Will there be zeroes or negative numbers?
// Will there be no other students (an empty array)?
// R
// We need to round down to the nearest integer
// Result is a number?
// E
// scores => [2, 2, 2, 2, 2], 2 => 2 + 2 + 2 + 2  / 5 => 10 / 5 => 2 (Rounded down)
// scores => [1, 2, 3, 4, 5], 3 => 2 + 2 + 3 + 4 + 5 / 5 => 16 / 5 => 3.125 => 3 (Rounded down)
// P
// Define a total variable
// sum all the numbers in the array
// calculate the average by dividing by the length of scores array + 1
// Round down to the nearest Integer

