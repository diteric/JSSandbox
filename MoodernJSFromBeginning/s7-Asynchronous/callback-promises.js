const posts = [
  {title: 'post One', body: 'Post One Body'},
  {title: 'post Two', body: 'Post Two Body'}
];

// use setTimeout to mimic server behaviour POST.
function addPost(post) {
  return new Promise(function(runResolve, runReject) {
    setTimeout(function() {
      posts.push(post);
      runResolve();
    }, 1000);

    // *** when runReject, runResolve is not called
    // runReject stop runResolve running and print the error only.
    runReject('Yan Error')
  });
}

// use setTimeout to mimic server behaviour GET.
function getPost() {
  setTimeout(function() {
    posts.forEach(post => document.body.innerHTML += `<li>${post.title}</li>`);
  },100);
}
// print error
function printError(err) {
  console.log(err);
}

addPost({title: 'post Three', body: 'Post Three Body'})
.then(getPost).catch(printError);  // *** promise key word, then, catch