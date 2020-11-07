// access parents and children, use element instead of node
let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child')

// get child nodes
val = list.childNodes;  // all child nodes - NodeList
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
// Node on Nodelist has a nodeType  1 - Element, 3 - Text, 8 - comment, 9 - Doc, 10 - Doctype
val = list.childNodes[1].nodeType;


val = list.children; // HTMLCollection - more popular can will be used, comparing to .childNodes
val = list.children[0];
list.children[0].textContent='Hello';

// get children of children
val = list.children[1].children;

// first and last child
val = list.firstChild;
val = list.firstElementChild;  //  use it!
val = list.lastChild;
val = list.lastElementChild.textContent;

// children element count
val = list.childElementCount;

// Parent
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);