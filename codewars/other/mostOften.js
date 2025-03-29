// Given a string of characters, return the character that appears the most often.
// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// max("Hello World!");

// 
// we recieve a string as the input
// Can the string be empty or null? // return empty string
// Can I have numbers appear as characters in the string?
// Do I count uppercase and lowercase characters differently? // Count them together!
// 
// Return the most often character, number, letter or symbol.
// What do we do if all characters appear the same number of times? // Return the last character!
// 
// "Hello World!" => 1 1 1 2 1   1 2 1 3 1 => 'l'
// "HHHHGGHHGLOL" => H6, G3, L2, O1 => H
// "aNnA" => a2, n2 => a
// 
// Get the string
// transform to lowercase
// loop over the characters
// If empty return ''
// Use a variable to track the maxNumber
// Use a variable to track the maxLetter
// Use an object to track the characters and frequency charFreq
// Loop over the characters
// // Add to the object key if they exist, else 1
// // if the frequency is greater than or equal to max, add to the maxLetter arr, update the maxNumber
// Return the last element in the maxLetter Array

function max(str) {
  if (!str) {
    return '';
  }
  const word = str.toLowerCase();
  let maxNumber = 0;
  let maxLetter = '';
  const frequency = {};
  for (let char of word) {
    frequency[char] = frequency[char] ? frequency[char] + 1 : 1;
    if (frequency[char] >= maxNumber) {
      maxLetter = char;
      maxNumber = frequency[char];
    }
  }
  return maxLetter;
}

console.log(max("Hello World!"));
console.log(max("HHHHGGHHGLOL"));
console.log(max("aNnA"));
