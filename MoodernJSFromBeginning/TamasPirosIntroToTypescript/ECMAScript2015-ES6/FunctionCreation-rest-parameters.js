// n number of parammeters 
// ... three dot syntex
// rest parameter must be the last parameter of a function.

// Before 2015, how to pass multiple variables into a function
function add() {
  const funArguments = Array.prototype.slice.call(arguments);
  console.log(arguments); //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
  console.log(funArguments); // [ 1, 2, 3, 4, 5 ]

  console.log(funArguments.reduce((previous, current) => previous + current));  // *** array reduce function to calc SUM
};

add(1,2,3,4,5);

// After 2015

function add2(...rest) {
  console.log(rest.reduce((previous,current) => previous + current));
}
add2(1,2,3);