//another way to do
/*
function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(2, 3));
*/

let num1 = prompt("Please enter a number");
let num2 = prompt("Please enter a number");
function getSum(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}
console.log(getSum(num1, num2));
