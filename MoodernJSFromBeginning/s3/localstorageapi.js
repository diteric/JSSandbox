// browser's local stroage API, support only string, thus need JSON parse
// set local storage item (not session storage, which will be cleared when browser is closed)
localStorage.setItem("name", "local");
localStorage.setItem("age", "30");

// set item in session storage, will be removed when browser restarts
sessionStorage.setItem("name", "session");

// remove from loacl storage
localStorage.removeItem("name");

// get value from local storage
console.log(localStorage.getItem("age"));

// clear -> localStorage.clear();

// add item
document.querySelector("form").addEventListener("submit", (e) => {
  const inputValue = document.getElementById("task").value; // get input value
  let currentTasks;
  // check if target key existing in the local stroarte
  if (localStorage.getItem("tasks") === null) {
    currentTasks = [];
  } else {
    // parse JSON ['a', 'b', 'c'] to an array of strings
    currentTasks = JSON.parse(localStorage.getItem("tasks"));
  }
  currentTasks.push(inputValue);

  // parse an array of strings to an JSON string ['a', 'b', 'c']
  localStorage.setItem("tasks", JSON.stringify(currentTasks));
});

const tasks = localStorage.getItem("tasks"); // returns a string but it is like ['a', 'b', 'c'], need to parse the string to and string array

// parse JSON ['a', 'b', 'c'] to an array of strings
const tasksStrArray = JSON.parse(localStorage.getItem("tasks"));

console.log(tasksStrArray);
tasksStrArray.forEach((element) => {
  console.log(element);
});
