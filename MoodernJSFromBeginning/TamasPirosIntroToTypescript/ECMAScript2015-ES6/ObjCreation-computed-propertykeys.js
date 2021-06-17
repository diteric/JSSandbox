// This is for creating object easily with a variable property key name

const propertyname = 'name';
const person = {[propertyname]: 'Yan'};
console.log(person); // { name: 'Yan' }

function createObj(propertyName) {
  return {
    [propertyName]:{
      message: 'Object created with property name: ' + propertyName
    }
  }
}

console.log(createObj('data')); // { data: { message: 'Object created with property name: data' } }
