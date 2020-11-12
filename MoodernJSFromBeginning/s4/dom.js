const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

localEventListeners();

function localEventListeners() {
  form.addEventListener("submit", addTask);
  taskList.addEventListener("mouseup", deleteTask);
  filter.addEventListener("keyup", filterTask);
  clearBtn.addEventListener("click", clearTasks);
}

// clear the collection
function clearTasks(e) {
  // solution 1
  // taskList.innerHTML = "";

  // solution 2 - faster, while on first child
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  e.preventDefault();
}

// filter the task collection
function filterTask(e) {
  // or document.querySelectorAll('.collection-item').forEach
  taskList.childNodes.forEach((node) => {
    // console.log(node);
    // console.log(node.textContent); // node text
    // console.log(node.innerText); // node text
    // console.log(node.innerHTML); // sef<a class="delete-item secondary-content"><i class="fa fa-remove"></i></a>

    // or use if (node.innerText.indexOf(e.target.value.toLowerCase()) != -1) {
    if (node.innerText.includes(e.target.value)) {
      node.style.display = "";
    } else {
      node.style.display = "none";
    }
  });
  e.preventDefault();
}

// delete task from task collection
function deleteTask(e) {
  console.log(e);
  console.log(this); // the collection itself
  if (e.target.className === "fa fa-remove") {
    e.target.parentElement.parentElement.remove();
  }
  e.preventDefault();
}

// add collection item to a collection
function addTask(e) {
  if (taskInput.value === "") {
    alert("input");
  } else {
    const liItem = createLi();
    taskList.appendChild(liItem);
    taskInput.value = "";
  }

  e.preventDefault();
}

function createLi() {
  const li = document.createElement("li");
  li.className = "collection-item";
  const testNode = document.createTextNode(taskInput.value);
  const link = createItemDeletionLink();

  li.appendChild(testNode);
  li.appendChild(link);

  return li;
}

function createItemDeletionLink() {
  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  const icon = document.createElement("i");
  icon.className = "fa fa-remove";
  link.append(icon);
  return link;
}
