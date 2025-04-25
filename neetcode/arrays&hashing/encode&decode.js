
function encode(strs) {
  let encoded = ""
  for (let word of strs) {
    encoded += `${word.length};${word}`;
  }
  return encoded
}

function decode(str) {
  return str.split(/\d;/); // Would not work for lat2;ina!
}

const codex = encode(["an4ita", "la;va", "latina"]);
console.log(codex);

console.log(decode(codex))