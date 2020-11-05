let id = "10";

// compare value, then // 10 = '10'
if (id == 10) {
  console.log("yes");
} else {
}

// equal to value and type  // by default use ===, alway use ===
if (id === 10) {
  console.log("yes");
} else {
  console.log('no');
}

// not equal to value and type
if (id !== 10) {
  console.log("yes");
} else {
  console.log('no');
}


//
if(id){
  console.log(`The ID is ${id}`);
}

if(typeof fes === 'undefined'){
  console.log(`The fes is undefined`);
}
