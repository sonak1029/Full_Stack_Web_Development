// Here we learn array
let str = ['apple', 'banana', 'mango', 'orange'];
let num = [10, 20, 30, 40, 50];

// That is the another onption to create an array
let myArr = new Array(1, 2, 3, 4, 5);
console.log(myArr);
console.log(typeof myArr);
// console.log(`${myArr}`);

// console.log(str);
// console.log(`${str}`);

num.push(60);
// console.log(num);

// Here we use some javascript methodes
num.pop();
// console.log(num); // it will pop the element

num.unshift(60);
// console.log(num);

num.shift();
// console.log(num);

// if you want only ture/false ans then we can use this
// console.log(num.includes(40));
// console.log(num.indexOf(40));

// const arr = num.join();
// console.log(arr);
// console.log(typeof arr);


// slice and splice
// const a = str.slice(1, 4);
// console.log(a);

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits);


// const c = fruits.slice(0, 3);
// console.log(c);
// console.log(fruits);


// console.log("\n");


// const d = fruits.splice(3);
// console.log(d);
// console.log(fruits);



// Array Part 2
const marvel_hero = ['ironman', 'thor', 'spiderman'];
const dc_hero = ['superman', 'flash', 'batman'];

// marvel_hero.push(dc_hero);
// console.log(marvel_hero);
// console.log(marvel_hero[3][0]);

// Here we use concat
// const all_hero = marvel_hero.concat(dc_hero);
// console.log(all_hero);


// Here we use spread // ek glass the usko mene drop kiya to wo kya ho gaya spread ho gaya
// const all_new_hero = [...marvel_hero, ...dc_hero];
// console.log(all_new_hero);

// Here we use flat methode if we have array ka ander  array use ander ek or array then ek or array usek ander bhe array 
// ab agar mujha ek he single array me ans chiya to me ya use karung flat methode
const new_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10], 11, [12, 13, 14, [15, 16]]];
// console.log(new_array);
const real_another_array = new_array.flat(5); // it will give the value in one single arrray 
// const real_another_array = new_array.flat(Infinity);
// console.log(real_another_array);


// ya jo methode h suppose jab bhe ham khai sa data to late h to khabi khabi hamea kuch alag 
// form me data dakhna ko milta h ab agar data hamea array ke from me chiya to ya karn hoga
// console.log(Array.isArray('sonak'));
// console.log(Array.from('sonak'));
// console.log(Array.from({ // that is very intersting case for interview
//     name: 'Sonak',
//     age: 19,
//     phone_Number: 12345678,
//     dob: '10/08/2021',
// }));


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // ya bhe ek tarika h array ka ander value ko insert karna ka