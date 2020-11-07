// replace element, call replaceChild on parent element/node

// create an new heading
const newHeading = document.createElement('h1');
newHeading.id = 'task-title'
newHeading.appendChild(document.createTextNode('Task List'));

// get the old heading
const oldHeading = document.getElementById('h1id');
// get its parent and call replace
oldHeading.parentElement.replaceChild(newHeading, oldHeading);


console.log(newHeading);



// remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// remove the element itself
lis[0].remove();
// remove from target element's parent
list.removeChild(lis[1]); // not lis[0]!!


// Class and Attributes
const firstLi = document.querySelector('li:first-child');
console.log(firstLi);

firstLi.className;
firstLi.classList;
firstLi.classList[0];
firstLi.classList.add('newclass');

// attributes
firstLi.getAttribute('href');
firstLi.setAttribute('href', 'abc');
firstLi.hasAttribute('d');
firstLi.removeAttribute('f');
