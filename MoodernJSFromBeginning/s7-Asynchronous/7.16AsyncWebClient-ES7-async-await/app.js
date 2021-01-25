const webClient = new JSONPlaceholderClient();

// console.log(webClient.get('https://jsonplaceholder.typicode.com/posts'));
// // without using promise, because fetch is async call, webclient get will return undefined

// get request
webClient
  .get('https://jsonplaceholder.typicode.com/users')
  .then((data) => console.log('GET', data))
  .catch((err) => console.log(err));
// get method now returns promise, thus callback can be used on fullied.

// post request
const newUser = {
  name: 'Yan',
  username: 'diteric',
  email: 'ay@gmail.com',
};

webClient
  .post('https://jsonplaceholder.typicode.com/users', newUser)
  .then((data) => console.log('POST',data))
  .catch((err) => console.log(err));

// put request
const newUser2 = {
  name: 'JH',
  username: 'MMM',
  email: 'ab@gmail.com',
};
webClient
  .put('https://jsonplaceholder.typicode.com/users/3', newUser2)
  .then((data) => console.log('PUT',data))
  .catch((err) => console.log(err));

// delete request
webClient
  .delete('https://jsonplaceholder.typicode.com/users/1')
  .then((data) => console.log('DELETE',data))
  .catch((err) => console.log(err));
