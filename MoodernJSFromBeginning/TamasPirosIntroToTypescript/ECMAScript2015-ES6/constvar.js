// *** forget var keywoard

// const and let have block scope
// const is similar to 'final' in Java

let name = 'Yan';
name = 'Yan';

const age = 12;

const person = {data : ['Hello']};
person.data.push('new');


if (true) {
  const blockScopeVar = 0; // *** block scope var is not accessible out of if.
}


console.log(person);