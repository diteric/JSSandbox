// normal object
// const yan = {
//   name: "Yan",
//   age: 30,
// };

// constructor to inialise person object
function Persion(name, age, dob) {
  // fields
  this.name = name;
  this.age = age;
  this.birthday = new Date(dob);
  console.log(this); // person himself

  // function
  this.getAge = function () {
    return age;
  };
}

const yan = new Persion("Yan", 30);
const john = new Persion("John"); // age is undefined
const jim = new Persion("Jim", 23, "9-10-1981");

// buildin constructors - not recommanded
// string and String
const str = "Yan";
const strCons = new String("Yan");
strCons.foo = "bar"; // can add attributes to object(strCons) like this....

console.log(typeof str); // string
console.log(typeof strCons); // object
console.log(strCons);
console.log(strCons == "Yan"); // object has a 'value': "Yan"

// number and Number
const numberCons = new Number(5);

// boolean and Boolean
const b = true;
const bCons = new Boolean(true);

// function and Function
const getSum = function (x, y) {
  return x + y;
};
const getSumCons = new Function("x", "y", "return x + y");

console.log(getSum(1, 2));
console.log(getSumCons(1, 2));

// object and Object
const ann = { name: "Ann" };
const annCons = new Object({ name: "Ann" });

// array and Array
const a1 = new Array(1, 2, 3);
console.log(a1);

// rgexp
const regexx = /\w+/;
const regexxCons = new RegExp("\\w+");
const regexxCons2 = new RegExp(`\\w+`);
console.log(regexxCons2);
