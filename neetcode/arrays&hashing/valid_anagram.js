function isAnagram(s, t) {
  if (s.length !== t.length) {
    return False;
  }
  const firstString = s.toLowerCase();
  const secondString = t.toLowerCase();
  const count = new Array(26).fill(0);
  console.log(count);
  for (let i = 0; i < s.length; i++) {
    count[firstString.charCodeAt(i) - "a".charCodeAt(0)] += 1;
    count[secondString.charCodeAt(i) - "a".charCodeAt(0)] -= 1;
  }
  for (let j = 0; j < count.length; j++) {
    if (count[j] !== 0) {
      return false;
    }
  }
  return true;
}

isAnagram("HelLo", "leOhl");
isAnagram("HelLo", "world");
