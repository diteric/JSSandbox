const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

localEventListeners();

function localEventListeners() {
  form.addEventListener("submit", addTask);
}

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
