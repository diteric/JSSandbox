// js it better to be used to manipulate dom, comparing to JQuery, JQuery is overly complex and slow

// dom query without using querySelector
let val;

val = document;
val = document.all;
val = document.all[0]; // html element
val = document.all[1]; // head element
val = document.all.length; // total number of elements
val = document.head;
val = document.body;
val = document.doctype;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// select without using selectors, not recommanded
val =document.forms;
val =document.forms[0];
val =document.forms[0].id;
val =document.forms[0].action;
val =document.forms[0].method;

val = document.links;
val = document.links[0];  // href a
val = document.links[0].className; 
val = document.links[0].classList;
val = document.links[0].classList[0];

val = document.images;
val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scrs = document.scripts; // here "scrs" is not an array
let scriptArray = Array.from(scrs); // convert document.scripts to an array and use array.foreach()

console.log(val);