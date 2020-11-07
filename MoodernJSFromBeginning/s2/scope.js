// Global Scope
var a = 1;
let b = 2;
const c = 3;

// function scope
function testFunctionScope() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log("Function Scope: ", a, b, c);
}
testFunctionScope();

console.log("Global Scope before Block Scope: ", a, b, c);

// block scope
if (true) {
  var a = 4;  // var changes value in global scope, but let and const doesn't
  let b = 5;
  const c = 6;
  console.log("Block Scope: ", a, b, c);
}
console.log("Global Scope: ", a, b, c);


/// test with loop
// "let a" will keep a's value in the global scope
for (let a = 0; a < 10; a++) {
  console.log(`loop: ${a}`);
}

console.log("Global Scope: a", a);

// "var a" will CHANGE a's value in the global scope
for (var a = 0; a < 10; a++) {
  console.log(`loop: ${a}`);
}
console.log("Global Scope: a", a);

