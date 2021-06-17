// For creating a object easily with exising variables.
// when key in the new object is the same as the name of existing variable, 
// property value short hand can be used.

const name = 'Yan';
const age = 1;

// const person = {
//   name: name,
//   age: age
// }

const person = {
  name,
  age
}

console.log(person);
