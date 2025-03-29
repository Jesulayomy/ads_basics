// 3. Write a function that returns the nth entry in the Fibonacci sequence, 
// // where n is a number you pass in as argument to the function. ( 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, etc...)
// fibonacci(3)  // --> 2
// 0, 1, 1

// Fibbonacci is the sum of the previous numbers
// There may be 0, but always a number
// The return values follows the index
// fibonacci(3)  // --> 2
// fibonacci(5)  // --> 5
// fibonacci(7)  // --> 13

// if n is 0 i need to return 0 = 0
// if n is 1 i need to return 1 = 1
// for i = 2+
// if n is 2 i need to return (1 + 0) = 1
// if n is 3 i need to return 1 + (1 + 0) = 2

function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let previous = 0;
  let secondPrevious = 1;
  let currentSum = 0;
  for (let i = 2; i <= n; i++) {
    console.log(`Iteration: ${i}: Previous:${previous}, Second Previous: ${secondPrevious}, Sum: ${previous + secondPrevious}`);
    currentSum = previous + secondPrevious;
    previous = secondPrevious;
    secondPrevious = currentSum;
  }
  return currentSum;
}

console.log(fibonacci(7));
