const numArr = [44, 1, 17, 92, 84, 165, 200, 5];

const filter = numArr.filter(myFunction);
function myFunction(value) {
  return value % 2 == 0;
}
let sum = 0;

for (let i = 0; i < filter.length; i++) {
  sum += filter[i];
}
console.log(sum);
 