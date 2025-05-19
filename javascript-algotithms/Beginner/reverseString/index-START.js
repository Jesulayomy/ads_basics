/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



// function reverseString(text) {
//     You can spread strings to an array
//     return [...text].reverse().join('');
//     return text.split('').reverse().join('');
// }

function reverseString(text) {
    let reversed = '';
    for (let char of text) {
        reversed = char + reversed;
    }
    return reversed;
}


module.exports = reverseString