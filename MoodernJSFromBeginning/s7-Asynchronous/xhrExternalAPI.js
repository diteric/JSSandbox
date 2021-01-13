document.getElementById('submit').addEventListener('click', showJokes);

function showJokes(e) {
  const numberOfJokes = document.querySelector('input[type="number"]').value; // ***
  const output = document.querySelector('.jokes');
  output.innerHTML = '';

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://api.icndb.com/jokes/random/'+numberOfJokes, true); // ***
  xhr.onload = function() {
    if(this.status === 200){
      console.log(JSON.parse(this.responseText)); 
      JSON.parse(this.responseText).value.forEach(element => {
        createUL(element, output);
      });
    }
  }
  xhr.send(); 
  e.preventDefault();
}

function createUL(joke, parent) {
  const ul = document.createElement('ul');
  ul.innerHTML = `<li>${joke.id}</li><li>${joke.joke}</li>`;
  parent.appendChild(ul);
}