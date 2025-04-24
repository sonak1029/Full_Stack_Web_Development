// Functions
// console.log("H");
// console.log("e");
// console.log("l");
// console.log("l");
// console.log("o");
// console.log(" ");
// console.log("W");
// console.log("o");
// console.log("r");
// console.log("l");
// console.log("d");

function sayHello(){
    console.log("H");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
    console.log(" ");
    console.log("W");
    console.log("o");
    console.log("r");
    console.log("l");
    console.log("d");
}

// sayHello();

// Add to number
function addTwoNumber(number1, number2){
    // console.log(number1 + number2);
    return number1 + number2;
}

const result = addTwoNumber(5, 9);
// console.log("Result : ", result);


function userLoggedIn(usename){
    if(!usename){
        console.log("Please enter your username");
        return;
    }

    return `${usename} just login`;

}

console.log(userLoggedIn("Sonak"));