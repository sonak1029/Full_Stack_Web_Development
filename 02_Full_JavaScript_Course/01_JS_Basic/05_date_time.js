// Here we learn date and time
let myDate = new Date();
// console.log(myDate); // it will generat all data time sec i didn't know but it will print lot's of things
// console.log(myDate.getDate()); // it will give me the current date
// console.log(myDate.getDay()); // it will print the like (jan, feb, march) but not in this form it will print (1, 2, 3, 4) ok
// console.log(myDate.getFullYear()); // it will give me the year full year

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

let myCurrentDate = new Date();
// console.log(myCurrentDate.toDateString());
// console.log(myCurrentDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(`${myCurrentDate} and the time`);

myCurrentDate.toLocaleString('default', {
    weekday: "long",
});