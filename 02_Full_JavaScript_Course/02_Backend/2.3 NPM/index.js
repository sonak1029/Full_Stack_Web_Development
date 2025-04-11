// // var generateName = require('sillyname');

// import  generateName from 'sillyname';

// const randomNameGenerate = generateName();

// // var sillyName = generateName();

// console.log(`My Name is ${randomNameGenerate}.`);


// const superheroes = require("superheroes");
// import myHeroes from "superheroes";
// console.log(myHeroes);

// 'superheroes' is default export — it's an array of names
// 'randomSuperhero' is a *named* export, not inside the default

import { randomSuperhero } from "superheroes";  // 🟢 Ye required hai for V4

const name = randomSuperhero();  // ✅ This works!
console.log(`I am ${name}.`);
