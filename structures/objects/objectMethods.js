let simpleColors = {
  colorA: 'white',
  colorB: 'black'
};
let natureColors = {
  colorC: 'green',
  colorD: 'yellow'
};
Object.setPrototypeOf(natureColors, simpleColors);
console.log(Object.keys(natureColors));
console.log(natureColors['colorA']);
console.log(natureColors['colorB']);
console.log(Object.entries(natureColors));

for (let key in natureColors) {
  console.log(key);
};

for (let value of Object.values(natureColors)) {
  console.log(value);
};

for (let [key, value] of Object.entries(natureColors)) {
  console.log(key, value);
};