const name = 'John';
const age = 24;
const job = 'Web dev';
const city = 'Dublin';
let html;

// es5
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City :' + city + '</li></ul>'

function Hello(){
  return 'hello function'
}

// es6 template string
html = `<ul>
          <li>name:${name}</li>
          <li>name:${2+2}</li>
          <li>name:${Hello()}</li>
          <li>name:${age > 30 ? 32 : 32}</li>
        </ul>`;    // use ` instead of ' & +







document.body.innerHTML=html;