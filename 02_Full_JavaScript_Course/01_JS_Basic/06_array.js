// Here we learn array
let str = ['apple', 'banana', 'mango', 'orange'];
let num = [10, 20, 30, 40, 50];

// That is the another onption to create an array
let myArr = new Array(1, 2, 3, 4, 5);
// console.log(`${myArr}`);

// console.log(str);
// console.log(`${str}`);

num.push(60);
// console.log(num);

// Here we use some javascript methodes
num.pop();
// console.log(num); // it will pop the element

num.unshift(60);
console.log(num);

num.shift();
// console.log(num);

// if you want only ture/false ans then we can use this
// console.log(num.includes(40));
// console.log(num.indexOf(40));

// const arr = num.join();
// console.log(arr);
// console.log(typeof arr);


// slice and splice
const a = str.slice(1, 4);
console.log(a);