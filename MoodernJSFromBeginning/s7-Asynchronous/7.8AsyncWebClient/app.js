const webClient = new JSONPlaceholderClient();

const posts = webClient.get('https://jsonplaceholder.typicode.com/posts/1', logGetResponse);


// define a callback function which will be used after getting the async response.
function logGetResponse(errorMsg, response) { // *** call back function
  if (errorMsg) {
    console.log(errorMsg);
  }
  else{
    console.log(response);
  }
}