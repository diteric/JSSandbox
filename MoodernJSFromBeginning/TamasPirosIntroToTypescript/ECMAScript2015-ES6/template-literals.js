// backticks ``  
// allow for expression via ${}
// very userful when constructing HTTP request

// line break, tab, expressions
const name = 'Yan';

console.log(`hello 

${name}


    world`);


const url = `https://api.yan.com/${name}`;
console.log(url);