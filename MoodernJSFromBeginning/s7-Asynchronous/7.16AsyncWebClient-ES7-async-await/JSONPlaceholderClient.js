class JSONPlaceholderClient{
  // Fetch Promise GET
  async get(url){ // *** async
    const resp = await fetch(url); // *** await the promise to be resolved
    const respJSON = await resp.json(); // *** await another promise to be resolved
    return respJSON;
  }  

  // Fetch Promise Post
  async post(url, data){
    const resp = await fetch(url,{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    return await resp.json();
  }

  // Fetch Promise Put
  async put(url, data){
    const resp = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    return await resp.json();
  }

  // Fetch Promise Delete
  async delete(url){
    const resp = await fetch(url, {
        method: 'DELETE'
      })
    return 'abc';
  }
} 