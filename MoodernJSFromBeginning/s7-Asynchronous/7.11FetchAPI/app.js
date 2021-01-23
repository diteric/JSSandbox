 document.getElementById('button1').addEventListener('click', showText);
 document.getElementById('button2').addEventListener('click', showJSON);
 document.getElementById('button3').addEventListener('click', showResp);
 

 function showText() {
   fetch('text2.txt')
    .then(function(resp) {
      console.log(resp);
      // *** error handling
      //If there is an http error, Fetch will not fire off .catch automatically. You have to check the response and throw an error yourself.
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.text();
    })
    .then(function(content) {
      document.getElementById('output').innerHTML=`<li>${content}</li>`
    })
    .catch(function(err) {  // *** without explicit error handling in line 12, catch doesn't show error in console. But error is in 'output..'
      console.log(err);
    });
 }
 function showJSON() {
   fetch('customers.json')
    .then(function(resp) {
      console.log(resp);
      return resp.json();
    })
    .then(function(content) {
      content.forEach(element => {
        document.getElementById('output').innerHTML+=`<li>${element.name}</li>`
      });
    });
 }
 function showResp() {
   fetch('https://api.github.com/users')
    .then(function(resp) {
      console.log(resp);
      return resp.json();
    })
    .then(function(content) {
      content.forEach(element => {
        document.getElementById('output').innerHTML+=`<li>${element.login}</li>`
      });
    });
 }