const cache = {  }


function factorial(n) {
  if (n === 0) {
    return 1;
  } else if (cache.hasOwnProperty(n)) {
    return cache[n];
  }
  return n * factorial(n - 1);
};

cache[20] = factorial(20);
console.log(cache[20]);

cache[80] = factorial(80);
console.log(cache[80]);

cache[100] = factorial(100);
console.log(cache[100]);