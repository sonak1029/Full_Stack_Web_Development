// Key Point We have to remember that


/*
1. Memory:
   - Memory stores all variables and functions.
   - JavaScript first allocates memory before executing code (called "Memory Phase").

*/

/*
******************** JavaScript ***********************
in simple language : JavaScript is a web language that can modify HTML, CSS, and handle data.

1. Javascript is a programming languagle of the web
2. it can update and change both html and css
3. it can calculate, manipulate and validate the data

JavaScript --> Javascript is a synchronous single-threaded language
*/


// What happens when we run javascript code?

// EveryThing in javascript happnes inside an execution context.


// Just for understanding
var n = 2; // first it will allocate some memory

// second this squre function allocate some memory
function squre(num){
    var ans = num * num;
    return ans;
}

// Remember in the first phase means MEMORY PHASE this variable contain undefind like (n = undefind) (squre2 = undefind)  (squre4 = undefind)
// Remember in the second phase means CODE PHASE also have to type 1. memory 2. code

var squre2 = squre(n); // here we invoke the function means (CALL THE FUNCTION) 
var squre4 = squre(4);

// console.log(squre2 + "\n" + squre4);


var a;
// console.log(a);

// if(a === undefined){
//     console.log("a is undefind");
// }else{
//     console.log("a is not undefind");
// }





// *********************************** VARIABLES ****************************************
// Q1
// x stores the value 5
// y stores the value 6
// z stores the value 11

let x = 5;
var y = 6;
const z = x + y;

console.log(z);


// ****** NOTE ********
// Variables are containers for storing values.