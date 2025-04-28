// Immediately Invoked Function Expressions (IIFE)

function greet() {
  console.log("Hello");
}

// greet(); // alag se call

// This is called named iife
// (function greet() {
//   console.log("Hello");
// })();


// This is called un-named iife
( (name) => {
    console.log(`Hello World ${name}`);
})("Sonak");