// fetch, local storage

//// window methods, objects, properties
// window.console.log('clg is part of window, so does alert')


// prompts - old style, should not use now

// window.alert('Hi')

// // prompt
// const input =window.prompt();
// alert(input);

// // confirm
// if (confirm('Are you shure')) {
//   console.log('Yes');
// }


// Outter hight and width
let val;
val = window.outerHeight;
val = window.outerWidth;

val = window.innerHeight;
val = window.innerWidth;

// scroll points
val = window.scrollY;
val = window.scrollX;

// localtion object
val = window.location;
val = window.location.hostname;
val = window.location.href; // url
val = window.location.search;  //?id=1

// localtion redirect  -- important
// window.location.href='http://google.com';
// window.location.reload();

// Histroy object  - browsing hsitory
// window.history.go(-1); // go back to the last browsing history
val = window.history.length;


//Navigator object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion; // 5.0 or 4.0 browsers
val = window.navigator.userAgent; 
val = window.navigator.platform;  // windows or Mac
val = window.navigator.vendor;
val = window.navigator.language;   


console.log(val);