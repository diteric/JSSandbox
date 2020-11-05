const person = {
  firstName: 'Yan',
  lastName: 'Li',
  age: 30,
  hobbies: ['23', '234'],
  contacts: {street: 'fea'},
  getBirth: function(){
    return 1988 - this.age;   // have to use this
  }
};


let val;
val = person;

// retrieve
val = person.firstName;

// val = person[firstName];
val = person.contacts.street;
val = person.getBirth();

console.log(val);

// array of objects
const people = [{a:1}, {b:2}, {c:3}]
console.log(people);

for (let i = 0; i < people.length; i++) {
   console.log(people[i]);
}