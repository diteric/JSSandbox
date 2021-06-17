// From 2015, function definition accepts default parameter values.

// Before 2015
// function multiply(num, multiplier) {
//   num = num === undefined ? 0 : num;
//   multiplier = multiplier === undefined ? 1 : multiplier;
//   return num * multiplier;
// }

// After 2015
function multiply(num = 0, multiplier = 1) {
  return num * multiplier;
}

console.log(
  multiply(),
  multiply(1),
  multiply(1,2)
);