// event bubbling
document
  .querySelector(".tasklist")
  .addEventListener("mousedown", (e) =>
    console.log(`${e.target.tagName} + tasklist`)
  );

document
  .querySelector(".card")
  .addEventListener("mousedown", (e) =>
    console.log(`${e.target.tagName} + card`)
  );

document
  .querySelector(".container")
  .addEventListener("mousedown", (e) =>
    console.log(`${e.target.tagName} + container`)
  );

// result =
// H1 + tasklist
// H1 + card
// H1 + container

// Event delegation
// When to use - 1. many items with same class(identifier), need a same event listener
// When to use - 1. automatically add event listener on auto created elements after page has been loaded

document.body.addEventListener("click", (e) => {
  if (e.target.className === "collection-item") {
    console.log("delete  collection-item");
  }
});

//use classList.contains !!! good
document.body.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("collection-item")) {
    console.log("delete  collection-item");
  }
});
