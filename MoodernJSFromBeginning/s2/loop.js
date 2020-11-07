// for loop
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log('2 is my favourite');
    continue;
  }

  if (i === 5) {
    break;
  }
  console.log(i);
}

// while loop
let i = 10;

while (i > 0) {
  console.log(i--);  
}

const cars = ['a1','a2','a3']
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}


// array loops
cars.forEach((c) => console.log(c));

cars.forEach(function(car) {
  console.log('fun: ' + car);
})

cars.forEach(function(car, index) {
  console.log('index: ' + index);
})

cars.forEach(function(car, index, array) {
  console.log('index: ' + index + array);
})


// MAP
const users = [
  {id: 'id1', name: 'name1'},
  {id: 'id2', name: 'name2'},
  {id: 'id3', name: 'name3'}
];

console.log(users.map(u => u.id));


// for in loop, will loop Object's FIELDS...., here u is just index number 0,1,2,3

const user1 = {id: 'id1', name: 'name1'};

for (const u in user1) {
  console.log('forin:+ ' + user1[u]);
}
