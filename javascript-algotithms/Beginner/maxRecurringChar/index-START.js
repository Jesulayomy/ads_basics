/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

function maxRecurringChar(text) {
  let charMap = {};
  let maxMap = {
    maxCharValue: 0,
    maxChar: ''
  }

  for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
      if (maxMap.maxCharValue < charMap[char]) {
        maxMap.maxChar = char;
        maxMap.maxCharValue = charMap[char];
      }
    } else {
      charMap[char] = 1;
    }
  }

//   for (let char in charMap) {
//     if (charMap[char] > maxCharValue) {
//       maxCharValue = charMap[char];
//       maxChar = char;
//     }
//   }

  return maxMap.maxChar;
}

module.exports = maxRecurringChar;
