let val;

let today = new Date();
today = new Date('9-10-1981');
today = new Date('9-10-1981 11:25:00');
today = new Date('September 10 1954');
today = new Date();

val = today;
val = today.getMonth();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();

today.setMonth(2);
today.setFullYear(1985)


console.log(today);