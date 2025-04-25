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

// console.log(userLoggedIn("Sonak"));



// Function part 2
function calculateCarPrice(val1, val2, ...num1){
    return num1;
}

// console.log(calculateCarPrice(60, 200, 600, 2000));

const car = {
    name: "Rolls-Royce",
    carNumber: "IND-33c456",
    prices: 900000
}

function handanObject(anyobject){
    console.log(`Car name is ${anyobject.name} and car number is ${anyobject.carNumber} and the price is ${anyobject.price}`);
}


// handanObject(car);

// Here we pass object and value is change
// handanObject({
//     name: "Rolls_Royce",
//     carNumber: "IND-33d678",
//     price: 156000
// });


const arr = [10, 20, 30, 40, 50];


function printArray(getValue){
    return arr;
}

console.log(printArray());