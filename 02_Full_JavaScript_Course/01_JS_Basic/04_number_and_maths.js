const score = 400;

// console.log(score);

const balance = new Number(100);

// console.log(balance);

// console.log(balance.toString().length);
// console.log(typeof balance);
// console.log(balance.toFixed(2));

const anotherNumber = 28.8663398339;

// console.log(anotherNumber.toFixed(1));

/*  ➡️ toPrecision() ek JavaScript method hai jo number ko ek fixed total digits ke format mein return karta hai.
Total digits ka count fix karta hai (including before and after decimal). range h 1 - 21 me bich me ok
Result string mein milta hai. */
// console.log(anotherNumber.toPrecision(3));

const hundreds = 1000000;
// This one is based on us numbers system
// console.log(hundreds.toLocaleString());

// console.log(hundreds.toLocaleString('en-IN'));


// ****************************** Maths ****************************************
const n = 500;

// console.log(Math);
// console.log(Math.abs(-4)); // if user give me - value soo i will use abs to convert in positive number
// console.log(Math.floor(398.98));
// console.log(Math.round(4.598));
// console.log(Math.ceil(4.1)); // thoda sa bhe 4 sa bada hua to wo uska agla number daga
// console.log(Math.random());
// console.log(Math.sqrt(4));
// console.log(Math.max(4, 3, 2, 9, 0, 20, 50));
// console.log(Math.min(4, 9, 2, 0, -1, 5, -4));

// console.log(3 ** 4);

// console.log(Math.random());
// console.log(Math.floor(Math.random() * 10 + 1));
// console.log((Math.random() * 10) + 1);

const min = 5;
const max = 10;

// console.log(Math.round(Math.random()));
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 10 + 1));
// console.log(Math.floor(Math.random() * 10) + 1);

console.log(Math.floor(Math.random() * (max - min + 1)) + min);