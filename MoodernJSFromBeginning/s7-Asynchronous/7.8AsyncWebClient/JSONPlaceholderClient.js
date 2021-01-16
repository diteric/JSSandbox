function JSONPlaceholderClient(){
  this.xhr = new XMLHttpRequest();
}

JSONPlaceholderClient.prototype.get = function(url, callback) { // *** callback example
  this.xhr.open('GET', url, true);

  this.xhr.onload = function() {
    if(this.status === 200){  // *** this.status instead of this.xhr.status
      callback(null, this.responseText);
    }
    else{
      callback('Error: ' + this.getAllResponseHeaders());
    }
  }

  this.xhr.send();
}