const webClient = new JSONPlaceholderClient();

// do a GET request
webClient.get('https://jsonplaceholder.typicode.com/posts', logResponse);


// define a callback function which will be used after getting the async response.
function logResponse(errorMsg, response) { // *** call back function
  if (errorMsg) {
    console.log(errorMsg);
  }
  else{
    console.log(response);
  }
}


// do a POST request
const newPost = {
  userId: 10,
  title: 'Test to create a new POST',
  body: 'Test Body'
}
webClient.post('https://jsonplaceholder.typicode.com/posts', newPost, logResponse);


// // do a PUT request
// const newPost = {
//   userId: 1,
//   title: 'Test to create a new POST',
//   body: 'Test Body'
// }
// webClient.put('https://jsonplaceholder.typicode.com/posts/10', newPost, logResponse);


// // do a DELETE request
// webClient.delete('https://jsonplaceholder.typicode.com/posts/1', logResponse);