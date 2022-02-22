// spread operator (...) is used to spread arrays - [ 'apple', 'banana' ] to apple banana
// spread operator (...) is used to combine arrays
// spread operator (...) is used to spread properties of an object


// Spread a simple array:
const fruits = ['apple', 'banana'];
const moreFruits = ['apple1', 'banana1'];

const allFruits = [...fruits, ...moreFruits];
console.log(fruits); // [ 'apple', 'banana' ]
console.log(...fruits); // apple banana
console.log(...allFruits); //apple banana apple1 banana1


// Spread an array of objects:
// FROM
// [
//   { accName: 'Account1', info: [ '123', '234' ] },
//   { accName: 'Account2', info: [ '999', '888' ] }
// ]
// TO
// { accName: 'Account1', info: [ '123', '234' ] } { accName: 'Account2', info: [ '999', '888' ] }
const data = [
  {
    accName: "Account1",
    info: ['123','234']
  },
  {
    accName: "Account2",
    info: ['999','888']
  }
];

console.log(data);
console.log(...data);

// spread operator (...) is used to spread properties of an object
// here all the oldObject's properteis will be copied into the newObject
const newObject = {...oldObject, newProp:5}
