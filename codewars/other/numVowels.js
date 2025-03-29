// taking in a string
// find out how many vowels are in that string
// return # of vowels that we get from that string

// the word "why" would return 0 vowels
// the word hello should return two vowels
// input the string "Tuesday" : 3

// return the sum of all the vowels contained in the string

// split method turns each character from a string into an array
// loop over the string characters array
// // crosss reference vowels(a, e, i, o, u) to the string input using a loop on array || regex || object
// // comparing each character to the vowels
// // Increment if they match
// return the count


function findVowels(str) {
  // With arrays
  let strArray = str.toLowerCase().split('');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;

  for (let i = 0; i < strArray.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (strArray[i] === vowels[j]) {
        vowelCount++;
      }
    }
  }
  return vowelCount;
}


// // test if the character (strArray[i]) is in the vowels regex
// function findVowels(str) {
//   // With Regular Expression test
//   let strArray = str.toLowerCase().split('');
//   let vowels = /[aeiou]/;
//   let vowelCount = 0;

//   for (let i = 0; i < strArray.length; i++) {
//     if (vowels.test(strArray[i])) {
//      vowelCount++;
//     }
//   }
//   return vowelCount;
// }

// // test if the character (strArray[i]) is in the vowels object
// function findVowels(str) {
//   // With Regular Expression test
//   let strArray = str.toLowerCase().split('');
//   let vowels = {
//     a: '',
//     e: '',
//     i: '',
//     o: '',
//     u: ''
//   };
//   let vowelCount = 0;

//   for (let i = 0; i < strArray.length; i++) {
//     if (vowels[strArray[i]]) {
//      vowelCount++;
//     }
//   }
//   return vowelCount;
// }


console.log(findVowels('why'));
console.log(findVowels('how many vowels are in that string'));
