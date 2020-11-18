// ES6 class
class Person {
  // constructor, for fields
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // methods
  greeting() {
    return `Hello there ${this.firstName}`;
  }

  // static methods
  static addNumber(x, y) {
    return x + y;
  }
}

// create a object
const mary = new Person("Mary", "Li");

console.log(mary);
console.log(mary.greeting());
console.log(Person.addNumber(1, 2));
