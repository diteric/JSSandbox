// 6 data types
// String, Number, Boolean, Null, Undefined, Symbols(ES6)

// PRIMITIVE
const name = 'Yan LI';
console.log(typeof name);

const age = 34;
console.log(typeof 34);

console.log(typeof true);
console.log(typeof null);   // return object, but null is a primitive type. It is bug

const sym = Symbol();
console.log(typeof sym);

const hobbies = ['movies', 'music'];
console.log(typeof hobbies);

const today = new Date();
console.log(today);

const person={
  name: 'John',
  age: 30
}
console.log(typeof person);