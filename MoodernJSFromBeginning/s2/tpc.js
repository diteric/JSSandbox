let val;

val = 3;

console.log(val);
console.log(typeof val);
console.log(val.length);  // undefined

val = String(3);
console.log(val.length);

val = String(4+4);
console.log(val);

val = String(true);
console.log(val);

val = String(new Date());
console.log(val);

val = String([1,2,34,5]);
console.log(val);

val = (5).toString;
val = true.toString;

// String to Number
val = Number('5');
console.log(val.toFixed(2)); // 5.00

val = Number(true); // -> 1
val = Number(null); // -> 0
val = Number('Hello'); // -> NaN   - not a number
val = Number([1,2,3]); // -> NaN   - not a number

val = parseInt('100');
val = parseFloat('100.50');



// 

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;
console.log(sum); // '5' + '6' = '56'
console.log(typeof sum);

