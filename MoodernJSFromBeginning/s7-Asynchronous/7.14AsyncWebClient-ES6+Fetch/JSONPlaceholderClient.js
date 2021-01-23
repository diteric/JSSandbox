// class JSONPlaceholderClient{
//   get(url){
//     fetch(url)
//       .then(resp => resp.json())
//       .then(json => json)
//       .catch(err => err);
//   }
// }  // async with no promise, and no callback


class JSONPlaceholderClient{
  // Fetch Promise GET
  get(url){
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(resp => resp.json())
      .then(json => resolve(json))
      .catch(err => reject(err));
    });
  }  // async using promise to add callbacks

  // Fetch Promise Post
  post(url, data){
    return new Promise((resolve, reject) => {
      fetch(url,{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(resp => resp.json())
      .then(json => resolve(json))
      .catch(err => reject(err));
    });
  }

  // Fetch Promise Put
  put(url, data){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(resp => resp.json())
      .then(json => resolve(json))
      .catch(err => reject(err));
    });
  }

  // Fetch Promise Delete
  delete(url){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE'
      })
      .then(resp => resp.json())
      .then(() => resolve('ABC'))
      .catch(err => reject(err));
    });
  }
} 