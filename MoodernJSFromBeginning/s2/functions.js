// function declarations
function greet(name) {
  if (typeof name === 'undefined') {
    name = 'aef';
  }
  console.log(`Hello ${name}`); 
 }

greet(); // don't have to pass in parameter values

function greet1(name = 'defaule name') {   // parameter default value!!
  console.log(`Hello ${name}`); 
 }

 greet1();  // don't have to provide function parameters

 // function expressions
const square = function(x = 5) {
  return x*x;
};

console.log(square());  // don't have to pass in arguments


// immidiatley invokable function expressions - IIFEs, run when define
(function () {
  console.log('IIFEs');
})();


(function (name) {  // function with parameters
  console.log(`Hello ${name}`);
})('Yan');


// function in object is called a method
const todo = {
  add: function() {
    console.log('add');
  }
}

todo.add();

// define new methods outside function using IIFEs
(todo.delete = function() {
  console.log('delete');
})();

