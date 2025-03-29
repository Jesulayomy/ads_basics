function findSmallestInt(arr) {
    //your code here
    return arr.reduce(
      (smallest, number) => (smallest < number) ? smallest : number,
      arr[0]
    );
}