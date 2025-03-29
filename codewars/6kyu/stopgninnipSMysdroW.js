function spinWords(string){
    let array = string.split(" ");
    let result = []
    for (let word of array) {
        if (word.length >= 5) {
        result.push(word.split('').reverse().join(''));
        } else {
        result.push(word);
        }
    }
    return result.join(" ");
}