// single selector
console.log(document.getElementById('div1'));
let value;

// get things from the element
value = document.getElementById('div1').id;
value = document.getElementById('div1').className;


// change style
document.getElementById('div1').style.background = '#333';
document.getElementById('div1').style.color = '#fff';
document.getElementById('div1').style.padding = '5px';
// document.getElementById('div1').style.display = 'none';

// change the content
document.getElementById('div1').textContent = 'task-list';
document.getElementById('div1').innerText = 'nt-list';
document.getElementById('div1').innerHTML = '<span style="color:yellow">TTT</span>';


console.log(value);


//// query selector(single) - new and powerful - work with css selector
let element;
element = document.querySelector('#div1');  // search by id using #
element = document.querySelector('.div1class'); // search by class using .
element = document.querySelector('div'); // search by element html type

document.querySelector('.div1class').style.color = '#fff';
// document.querySelector('ul li div').style.color = '#fff'; // nested elements query
// document.querySelector('li:last-child').style.color = '#fff'; // css sudo class query
// document.querySelector('li:nth-child(3)').style.color = '#fff'; // css sudo class query
// document.querySelector('li:nth-child(3)').textContent = '';
// document.querySelector('li:nth-child(odd)').textContent = '';
console.log(element);


//// query selector(multiple)
let items = document.getElementsByClassName('classname'); // return an HTML Collection which is not an array
items = document.getElementsByTagName('div'); // return an HTML Collection
items[0].style.color = 'red';

// querySelector +++++++ getElementsByClassName  -- useful
document.querySelector('div').getElementsByClassName('collestionItem');

// convert HTML collestion into an array
const array = Array.from(items);
array.reverse();

//// node lists - document.querySelectorAll returns NodeList
let items1 = document.querySelectorAll('ul.collection li.collection-item');
items1.forEach(element => {
  
});

// manipulate odd/even item on a list using querySelectorAll
let liOdd = document.querySelectorAll('li:nth-child(odd)');
liOdd.forEach(element => {
  
});