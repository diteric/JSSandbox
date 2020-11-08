// MOUSE EVENT
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h1');

// click
// clearBtn.addEventListener('click', runEvent);
clearBtn.addEventListener('dblclick', runEvent);
clearBtn.addEventListener('mousedown', runEvent);
clearBtn.addEventListener('mouseup', runEvent);

// fire only when in and out of the target element
card.addEventListener('mouseenter', runEvent);
card.addEventListener('mouseleave', runEvent);

// fire when in and out of the target element, and when in and out of target's child
card.addEventListener('mouseover', runEvent);
card.addEventListener('mouseout', runEvent);

// MOUSE MOVE
card.addEventListener('mousemove', runEventCoords);

//event handler to print event type
function runEvent(e) {
  console.log(`Event Type: ${e.type}`);
}


// This is cool !!
function runEventCoords(e) {
  console.log(`Event Type: ${e.type}`);
  
  // use heading to display offset coordinates of mouse cousor 
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`

  // set page backgroud with offset, and css rgb color.
  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
  card.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},255)`;
}
