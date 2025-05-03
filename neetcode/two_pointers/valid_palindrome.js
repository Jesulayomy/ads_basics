function validPalindrome(s) {
  const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const len = str.length;
  for(let i = 0; i < len / 2; i++) {
    if (str[i] != str[len - i - 1]) {
      return false
    }
  }
  return true;
}

console.log(validPalindrome('A man, a plan, a canal: Panama'));
