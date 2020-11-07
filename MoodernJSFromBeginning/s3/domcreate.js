// create an element
const li = document.createElement('li');

li.className = 'collection-item' 
li.id = 'item-id'
li.setAttribute('title', 'new title')

// create child inside li
li.appendChild(document.createTextNode('Hello Text Node'));

// create new link element
const link = document.createElement('a');
link.className = 'linkclassname';
link.innerHTML = '';
li.appendChild(link);

// append li to existing ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);