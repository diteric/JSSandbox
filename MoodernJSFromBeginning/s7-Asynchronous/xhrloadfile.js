document.getElementById('button').addEventListener('click', showContent);

function showContent() {

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'datafile.txt', true);
  xhr.onload = function() {
    if(this.status === 200){
      document.getElementById('output').innerText = this.responseText; // ***
    }
  }

  // when change is under process, for spinners/loaders
  xhr.onprogress = function() {
    console.log('READYSTAGE', this.readyState);
  }

  // change status of request
  xhr.onreadystatechange = function() {
    console.log(this.readyState);
    console.log(this.status);
  }

  xhr.onerror = function() {
    console.log('error handling')
  }

  xhr.send();

  console.log('content');
}