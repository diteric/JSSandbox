const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getMarried(newLastName) {
    this.lastName = newLastName;
  },
};

// Object.create 1
const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Li";
console.log(mary);
console.log(mary.greeting());

// Object.create 2
const brad = Object.create(personPrototypes, {
  firstName: { value: "Brad" },
  lastName: { value: "Li" },
});

console.log(brad.greeting());
