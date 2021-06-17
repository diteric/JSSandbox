// It is about reading values in an Object or an Array
// before we use dot walking
// const name = person.name; // ES5


// Object
const person = {
  name:'Yan',
  age:30,
  hobbies:['coding, ski'],
  location: 'dublin'
};

const {name, age} = person; // ES6
console.log(name, age);

const {name: firstname, age: myage} = person; // *** extract name property and use alias name
console.log(firstname, myage);

const {name: na, ...restObj} = person;  // extract 'sub' object of the original.
console.log(restObj);


// Array
const number = [1,2,3,4];
const [n1, n2] = number;
console.log(n1, n2); // 1 2

const [a, b, ...restArray1] = number; // extract sub array of an array
//const [...restArray2, z] = number; // *** error rest element must be last element
console.log(restArray1); // [3, 4]


// Mixed real word example 1
const apiResponse = {
  count: 10,
  data: [
    {
      accName: "Account1",
      info: ['123','234']
    }
  ]
};

const {count, data:[{accName,info}]} = apiResponse;
console.log(info);

// Mixed real word example 2
const apiResponse2 = {
  count: 10,
  data: [
    {
      accName: "Account1",
      info: ['123','234']
    },
    {
      accName: "Account2",
      info: ['999','888']
    }
  ]
};
const {count: count2, data: data2} = apiResponse2; // *** Alias
console.log(data2);

data2.forEach(d => {
  let {accName} = d;
  console.log(accName);
})  // *** how to loop through data in api response.
