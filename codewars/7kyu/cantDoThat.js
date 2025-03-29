function bucketOf(str) {
  const water = /water|wet|wash/.test(str.toLowerCase());
  const slime = /i don\'t know|slime/.test(str.toLowerCase());
  if (water && slime) {
    return 'sludge';
  } else if (water) {
    return 'water';
  } else if (slime) {
    return 'slime'
  } else {
    return 'air'
  }
}

console.log(bucketOf("wet water"));
console.log(bucketOf("watery"));
console.log(bucketOf("Hello welld"));
console.log(bucketOf("What is that, WATER?!?"))
console.log(bucketOf("I don't know if I'm doing wet right."))
console.log(bucketOf("You won't get me!")) 