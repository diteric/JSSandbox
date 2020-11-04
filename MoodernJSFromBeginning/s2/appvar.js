// // var let const
// var name = 'Yan Li';
// console.log(name);

// name = 'Jianhua';
// console.log(name);

// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers, _, $
// var $name, _name;
// var firstName = 'Yan';

// // let const
// let name;
// name = 'Yan Li';
// console.log(name);

// name = 'Jianhua';
// console.log(name);

// const
const name = 'const name';   // has to have a value and cannot be changeds
console.log(name);

// define an object, value of object can be changed, not reference.
const person={
  name: 'John',
  age: 30
}

person.name = 'Yan';

console.log(person);

// array, value of const can be changed
const number = [1,2,3,4,5];
number.push(6);

console.log(number);
