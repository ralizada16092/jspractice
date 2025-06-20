const arr = [
  "America",
  "France",
  "Turkey",
  "Russia",
  "China",
  "Vietnam",
  "Azerbaijan",
];

const filtered = arr.filter(func);
function func(value) {
  return value.length > 6;
}

console.log(filtered.toString());
