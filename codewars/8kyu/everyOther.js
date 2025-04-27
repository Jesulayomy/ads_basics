function removeEveryOther(arr){
  const everyOther = []
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      everyOther.push(arr[i]);
    }
  }
  return everyOther;
}
