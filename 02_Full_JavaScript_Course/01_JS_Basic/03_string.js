const name = "Node";
const repoCount = 50;

// console.log(name + " " + repoCount + " Value");

// console.log(`Hello And welcome to the ${name} Community and my total repo is ${repoCount}`);

const gameName = new String("pro-gra-mmi-ng");

// console.log(gameName);
// console.log(gameName[0]);

// This all are the methods
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// here we check kaise index par kon sa value h
// console.log(gameName.charAt(4));

// Returns the index of the first occurrence of the specified value in the string/array. Returns -1 if not found.
// console.log(gameName.indexOf('m'));


// const newString = gameName.substring(-3, 6); // -3 ko wo automatically 0 me convert kar daga ok
// const check = gameName.substring(8, 5); // yaha par start > end h ot wo swap ho jayaga means see this example (8, 5) it become (5, 8) ok
// console.log(check);
// console.log(newString);



// That is the working part of slice
/*
    C  a  l  l  O  f  D  u  t  y
    0  1  2  3  4  5  6  7  8  9
    -10 -9 -8 -7 -6 -5 -4 -3 -2 -1
*/


const anotherString = gameName.slice(-14, 3); // yaha par 3 sa phele jo bhe value h usko print karga like (n-1) ok
// console.log(anotherString);

// this one is only work when user give lot's of white space
const str = "       CallOfDuty       ";
// console.log(str);
// console.log(str.trim());


const url = "https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11";

// console.log(url.replace('=', '-'));
// console.log(url.includes('sonak'));

console.log(gameName.split('-'));