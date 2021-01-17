function JSONPlaceholderClient() {
  this.xhr = new XMLHttpRequest();
}

// GET Handler
JSONPlaceholderClient.prototype.get = function (url, callback) {
  // *** callback example
  this.xhr.open('GET', url, true);

  this.xhr.onload = function () {
    if (this.status === 200) {
      // *** this.status instead of this.xhr.status
      callback(null, this.responseText);
    } else {
      callback('Error: ' + this.getAllResponseHeaders());
    }
  };

  this.xhr.send();
};

// POST Handler
JSONPlaceholderClient.prototype.post = function (url, data, callback) {
  this.xhr.open('POST', url, true);
  // *** when doing POST JSON, need to set conntent-type
  this.xhr.setRequestHeader('Content-type','application/json');

  this.xhr.onload = function () {
    // *** successfull POST returns 201
    if (this.readyState == 4 && this.status == "201"){
      callback(null, this.responseText);
    }
  };

  this.xhr.send(JSON.stringify(data)); // ***  when doing POST, xhr should send some data (JSON format String)
};

// PUT Handler *** similar to POST
JSONPlaceholderClient.prototype.put = function (url, data, callback) {
  this.xhr.open('PUT', url, true);
  // *** when doing PUT JSON, need to set conntent-type
  this.xhr.setRequestHeader('Content-type','application/json');

  this.xhr.onload = function () {
    // *** successfull POST returns 200
    if (this.readyState == 4 && this.status == "200"){
      callback(null, this.responseText);
    }
  };

  this.xhr.send(JSON.stringify(data)); // ***  when doing PUT, xhr should send some data (JSON format String)
};

// DELETE Handler  *** similar to GET
JSONPlaceholderClient.prototype.delete = function (url, callback) {
  // *** callback example
  this.xhr.open('DELETE', url, true);

  this.xhr.onload = function () {
    if (this.status === 200) {
      // *** this.status instead of this.xhr.status
      callback(null, this.status);
    } else {
      callback('Error: ' + this.getAllResponseHeaders());
    }
  };

  this.xhr.send();
};