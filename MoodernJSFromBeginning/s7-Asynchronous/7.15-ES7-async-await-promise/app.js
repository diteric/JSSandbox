// async keyword make function returns a promise
async function myFun() {
  return 'myFun'
};

myFun()
  .then(res => console.log(res));

// await a promise to be fullfiled
async function myFun1(data) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(()=> resolve(data), 1000)
  });

  const res = await promise;
  console.log('res', res); // res is the data
  return res;
};

myFun1('myFun1')
  .then(res => console.log(res));

// error handling
async function myFun2(data) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(()=> resolve(data), 1000)
  });

  const error = true;
  if (!error) {
    const res = await promise;
    return res;
  }
  else{
    await Promise.reject(new Error('Something went wrong'));
  }
};
myFun2('myFun2')
  .then(res => console.log(res))
  .catch(err => console.log(err));



// Fetch async and await
async function getUsers() {
  // wait for response promise object to be full filled
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  // wait for response.json() promise object to be fllfilled.
  const json = await response.json();

  // return the result after wait.
  return json;
}

// print response
getUsers().then(data => console.log(data))







// // promise chain
// fetch('https://jsonplaceholder.typicode.com/users/1', {
//   method: 'PUT',
//   headers: {
//     'Content-type':'application/json'
//   },
//   body: JSON.stringify({
//     name: 'Yan'
//   })
// })
// .then(()=> fetch('https://jsonplaceholder.typicode.com/users'))
// .then(resp => resp.json())
// .then(json => console.log(json));