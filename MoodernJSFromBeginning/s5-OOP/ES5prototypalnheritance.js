// A Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

const p1 = new Person("John", "Li");
console.log(p1.greeting());

// A Customer constructior
function Customer(firstName, lastName, phone) {
  // inherit from an existing constructor - Person
  Person.call(this, firstName, lastName);
  this.phone = phone;
}

// inherit Person's prototype methods (all methods including constructors)
Customer.prototype = Person.prototype;
// Customer.prototype = Object.create(Person.prototype);

// set the Customer's constructor back to Customer
Customer.prototype.constructor = Customer;

// override prototype methods
Customer.prototype.greeting = function () {
  return `Hello Hello ${this.firstName} ${this.lastName}`;
};
const c1 = new Customer("John", "Li", 12345666);
console.log(c1);
console.log(c1.greeting());
