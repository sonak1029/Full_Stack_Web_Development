// Primitive datatype

// 7 Types : string, number, boolearn, undefiend, null, symbol, BigInt

// Reference (Non-Primitive)

// Array, Object, function ..etc



// Stack (Primitive), Heap (Non-Primitive)
let myYoutubeName = "Tony";

let anotherName = myYoutubeName;

anotherName = "Jhow";

// console.log(anotherName);
// console.log(myYoutubeName);

let userOne = {
    email: "userOne@gmail.com",
    upi: "userOne@ybl"
};

let userTwo = userOne;

console.log(userOne);
console.log(userTwo);

userTwo.email = "userTwo@33gmail.com";
userTwo.upi = "userTwo@ybl"

console.log(`This is for userOne : ${userOne.email}`);
console.log(`This is for userOne : ${userOne.upi}`);
console.log("\n");
console.log(`This is for userTwo : ${userTwo.email}`);
console.log(`This is for userTwo : ${userTwo.upi}`);