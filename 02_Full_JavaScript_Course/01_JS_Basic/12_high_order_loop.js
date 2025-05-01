// Here we learn high order array loop 

// First one is  for of loop

// ["", "", ""]
// [{}, {}, {}]

const str = ["Mango", "Banana", "Orange", "Apple", "grapes"];
const num = [10, 20, 30, 40, 50];

// This is for number
for(let x of num){
    // console.log(`${x}`);
}

// This one is for string
for(let x of str){
    // console.log(`${x}`);
}

const greet = "Hello World!";

for(let x of greet){
    // console.log(x);
}


// Now here we learn map
const myMap = new Map();

myMap.set("Name", "Rupa");
myMap.set("Age", "19");
myMap.set("Location", "New York");
// myMap.set("Name", "Rupa"); // to ya hamesha duplicate value ko avoid karaga ok


// console.log(myMap);

// Now ab yaha par ham array ke De-Structuring karange
for(let x of myMap){
//     console.log(x); // yaha to mujha array ke form me value mile but mujha waise nahi chiya ok
}

// Now we are going to de-structuring the array
for(let [key, value] of myMap){
    // console.log(`${key} :- ${value}`);
}


// Now we put for of loop on object
const obj = {
    name: "John Snow",
    age: 25,
    location: "New York",
    email: "johnsnow@gmail.com"
};

// for(let [key, value] of obj){
//     // console.log(key, ':-', value); // this one is not work to itrate the object
// }




// Part 2 not video no 2 ok
const myObj = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
};

for (const key in myObj) {
    // console.log(`${key} shorcut is for ${myObj[key]}`); // now we can say that is for in loop is work for object
}


// Now we check for array this for in loop is work or not

const coding = ["javascript", "c++", "ruby", "python", "swift"];

for(const key in coding){
    // console.log(key, ":-", coding[key]); // for in loop is work for array
}

// Mostly we foreach loop
// coding.forEach( function (item) { // yaha function ka ander nam isliya nahi h kyuki ya ek callback function h isliya 
//     console.log(item);
// } );



// Now ab arraw function ke help sa ok
coding.forEach( (item) => {
    // console.log(item);
} )


coding.forEach( (value, index, arr) => {
    // console.log(value, index, arr);
} );


// We can also use like this
function printarr(item){
    console.log(item);
}

// coding.forEach(printarr);

// now here we put array in object
const myyCoding = [
    {
        language: "javascript",
        languageFileName: "js"
    },

    {
        language: "java",
        languageFileName: "java"
    },

    {
        language: "cpp",
        languageFileName: "c++"
    }
]


// Iterating over an array of objects
myyCoding.forEach( (item) => {
    // console.log(item.language); // Now we can say that we can iterate over an array of objects like this
} )