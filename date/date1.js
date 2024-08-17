var date = new Date();
//var date = new Date(2018, 11, 24, 10, 33, 30, 0);
//var date = new Date('2018-11-24T10:33:30');
//var date = new Date('2018-11-24T10:33:30Z');
//var date = new Date(0);

// date.setFullYear(2023)
// date.setMonth(1)
// date.setDate(14)
// date.setHours(0)
// date.setMinutes(0)
// date.setSeconds(0)
// date.setMilliseconds(0)
// console.log(date);


//getters
console.log("year...",date.getFullYear());
console.log("month...",date.getMonth());
console.log("date...",date.getDate());
console.log("day...",date.getDay());
console.log("hours...",date.getHours());
console.log("minutes...",date.getMinutes());
console.log("seconds...",date.getSeconds());
console.log("milliseconds...",date.getMilliseconds());
console.log("time...",date.getTime());

console.log("toDateString...",date.toDateString());
console.log("toTimeString...",date.toTimeString());
console.log("toLocaleDateString...",date.toLocaleDateString());
console.log("toLocaleTimeString...",date.toLocaleTimeString());
console.log("toISOString...",date.toISOString());
console.log("toUTCString...",date.toUTCString());
//console.log("toJSON...",date.toJSON());
console.log("toString...",date.toString());

//find the difference between two dates
var date1 = new Date('2018-11-24T10:33:30');
var date2 = new Date('2018-11-25T10:33:30');

//var diff = date2.getTime() - date1.getTime();
var diff = date2 - date1;
console.log("diff...",diff);

// var date3 = new Date(diff);
// console.log("date3...",date3);


