const firstName = "Yan";
const lastName = "Li";

let val = "val";
console.log(val);

// concatenation
console.log(firstName + " " + lastName);

// Append
console.log(val);
console.log((val += lastName));

// Escaping
val = "fse''fdfef"
val = 'fse\'\'fdfef'
console.log(val);

// Length
console.log('object'.length);

// concat
console.log('object'.concat('a', 'b', 'c'));

// change case
console.log('object'.toUpperCase());

// index
console.log('object'[0]);
console.log('object'.indexOf('o'));
console.log('object'.lastIndexOf('o'));

// charAt()
console.log('object'.charAt(1));

// substring
console.log('object'.substring(1));

// slice
console.log('object'.slice(-1)); // start from the back

// split
console.log('object'.split('j'));  // return an array

// replace
console.log('object'.replace('j', 'a'));

// includes
console.log('object'.includes('j')); //return true or false
