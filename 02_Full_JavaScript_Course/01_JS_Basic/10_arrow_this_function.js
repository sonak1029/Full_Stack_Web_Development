// Here we learn arrow function this key word
const user = {
    username: "Jhon Snow",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

// user.welcomemessage();
// user.username = "Tony";
// user.welcomemessage();

// console.log(this);

// function chai(){
//     let username = "Jhon";
//     console.log(this);
// }

// chai();


// const show = function(){
//     let username = "Tony";
//     console.log(this.username) // ya undefined daga kyuki ham is tara this ko use nahi kar sakte h function object me he use hoga ok
//     console.log(this); // or ya globle objects 
// }



// How to declare arrow function in js here we see now
// const show = () => {
//     let useename = "Tony";
//     console.log(this);
// }

// show();


// that is the main syntext
// () => {} // we can store in another variable
// const printName = () => {
//     let name = "Sonak";
//     console.log(`Hello and welcome to the arrow function and my name is ${name}`);
// }

// printName();

// Add to number
const addTwoNumber = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwoNumber(10, 43));