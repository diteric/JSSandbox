// *** keyword 'this' is lexically bound with =>
// *** Returning an object requires parentheses around {}, => ({}) 

// lexically bound example
// const quotient = {
//   numbers: [1,2,3,4,5,6,7,8],
//   results: [],
//   calc: function(divisor) { // ** this.numbers.forEach has no scope issue
//     this.numbers.forEach(function(num) { 
//       if (num % divisor === 0) { 
//         this.results.push(num);  // *** this.results.inside function has scope issue. Cannot read property 'push' of undefined
//       }
//     }); // *** Solution 1, use .bind(this) here
//   }
// };

const quotient = {
  numbers: [1,2,3,4,5,6,7,8],
  results: [],
  calc: function(divisor) { 
    this.numbers.forEach(num => { // *** Solution 2, use arrow function
      if (num % divisor === 0) { 
        this.results.push(num); 
      }
    }); 
  }
};

quotient.calc(3);
console.log(quotient.results);


// ** create an object, must use parentheses, or there will be syntex errors
const greet = ({name: 'Yan', age: 12});
console.log(greet);