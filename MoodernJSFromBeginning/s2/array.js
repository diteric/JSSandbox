// create an array
const numbers = [34,65,23,89,2];
const numberArray = new Array(4,65,23,89,2);

const stringArray = ['apple', 'banana', 'pear'];
const mixedArray = [1, 's', true, undefined, null, new Date()];

console.log(mixedArray);

//
let val;

val = numbers.length;
val = Array.isArray(numberArray); // check if is an array

// read
val = numbers[2];

// insert
numbers[2] = 100;
val = numbers.indexOf(100);

// mutating arrays
numbers.push(765435); // add on to the end
numbers.unshift(111); // add on to the first

// take off from end;
numbers.pop();

// take off from the front
numbers.shift();

// splice values, remove elements from array
numbers.splice(1, 2)

numbers.reverse();

val = numbers.concat(numberArray);

// sort + call back
val = numbers.sort(function(x, y){
  return y - x;
});

// find + lambda
function under50(num){
  return num < 50;
}

val = numbers.find(v => v < 500)


console.log(numbers);
console.log(val);