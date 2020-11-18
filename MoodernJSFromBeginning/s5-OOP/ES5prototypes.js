// Object.prototype
// Person.prototype

function Person(firstName, lastName, age) {
  // fields should be defined in the constructor
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.birthday = new Date();
  // // function
  // this.getAge = function () {
  //   return age;
  // };
}

// functions should be put in the prototy
Person.prototype.getAge = function () {
  return "Person: " + this.age;
};

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.getMarried = function (newLastName) {
  this.lastName = newLastName;
  return `${this.firstName} ${this.lastName}`;
};

const john = new Person("John", "Joe", 35);
console.log(john);
console.log(john.getMarried("Li"));

// Object hasOwnProperty
console.log(john.hasOwnProperty("firstName"));
