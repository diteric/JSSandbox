const posts = [
  {title: 'post One', body: 'Post One Body'},
  {title: 'post Two', body: 'Post Two Body'}
];

// use setTimeout to mimic server behaviour POST.
function addPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 1000);
}

// use setTimeout to mimic server behaviour GET.
function getPost() {
  setTimeout(function() {
    posts.forEach(post => document.body.innerHTML += `<li>${post.title}</li>`);
  },100);
}

addPost({title: 'post Three', body: 'Post Three Body'}, getPost);

// *** instead of calling getPost after addPost, make the getPost a call addPost. 
// That is the Asynchronous way of doing add + read. 
//getPost
