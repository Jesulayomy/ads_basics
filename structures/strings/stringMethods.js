let str = '               the    only    secret   to create life  only    is       42   ';

console.log(str.length);
console.log(str.trim());
console.log(str.includes('ret'));
console.log(str.indexOf('ret'));
console.log(str.indexOf('reg') > -1);

// toUpperCase
console.log(str.replace('secret', 'key').trim());
console.log(str.replace(/only/gi, 'first').trim());

console.log(str.slice(23, -15).trim());
console.log(str.slice(-10).trim());


console.log(str.match(/ly/g));

console.log(str.charCodeAt(10));