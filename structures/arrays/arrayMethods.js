let arr = ["I", "study", "JavaScript", "right", "now"];
console.log(arr)
delete arr[1]
console.log(arr)
let removed = arr.splice(1, 2, "am...", "IronMan")
console.log(removed)
console.log(arr)
removed = arr.splice(1, 2, "am...", "Tralaleo", "Tralala");

arr = ["t", "e", "s", "t"]
removed = arr.slice(1, 3);

arr.concat(...['i', 'n', 'g'])

let long = arr.concat(...['i', 'n', 'g'])

long.splice(4, -1)
long.splice(4)

long = long.concat('i', 'n', 'g');
arr.forEach((item, index, array) => {
  console.log(item, index, array);
});

arr.forEach(console.log);
arr.indexOf('t')
arr.indexOf('t', 1);

arr.filter((item, index, array) => {
  return item === 't';
});

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 1, name: "Florence"},
  {id: 2, name: "Mary"}
];

let nuns = users.filter((item, index, array) => {
  return item.name === "Mary";
});

let people = users.map(item=>item.name);

users.sort()

let scoreboard = users.sort((a, b) => {
  if (a.id > b.id) return 1;
  if (a.id == b.id) return 0;
  if (a.id < b.id) return -1;
});

let scoreBoard = users.sort((a, b) => a.id - b.id)

scoreBoard = users.sort((a, b) => a.name.localeCompare(b.name))

console.log(scoreBoard == scoreboard)
// To save the repl, use `.save ./file/to/save.js`
let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23


// Every and Some array Methods
function arraysEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

alert( arraysEqual([1, 2], [1, 2])); // true