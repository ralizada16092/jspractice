const myArray = [12, -5, 4, 181, 3];
const filtered = myArray.filter(func2);
function func2(val) {
    return !(val % 2 == 0)
}

let sum = 0;
for(let i = 0; i < filtered.length; i++){
    sum += filtered[i];
    result = sum / filtered.length;
}
console.log(result);
