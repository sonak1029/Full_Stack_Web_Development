// Stack (Primitive), Heap (Non-Primitive)
let myYoutubeName = "SoankJha#455554u434932890";

let anotherName = myYoutubeName;

anotherName = "RichaMishra3940393";

// console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
};

let userTwo = userOne;

// console.log(userOne);
// console.log(userTwo);

userTwo.email = "user@33gmail.com";

console.log(userOne.email);
console.log(userTwo.email);