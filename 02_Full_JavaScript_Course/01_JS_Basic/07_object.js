// singleton

// Object literals
// Object.create()
const mySym = Symbol("key1");

const user = {
    name: "Sonak",
    "full name": "Sonak Kumar Jha",
    [mySym]: "MyKey1",
    age: 32,
    location: "Jaipur",
    email: "abcd@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
};

// console.log(`${user.name}`);
// console.log(user["full name"]);
// console.log(typeof user[mySym]);

user.email = "rupa@gmail.com";
// Object.freeze(user); // all value are freeze we couldn't any value
// console.log(user);
user.email = "sonak123@gmail.com";
// console.log(user);
// console.table(user);

user.greeting = function(){
    console.log("Hello and welcome to objects class");
}


user.greeting_2 = function(){
    console.log(`Hello and welcome to objects class ${this.name}`);
}

// console.log(user.greeting());
// console.log(user.greeting_2());





// Object part 2
// const tinderUser = new Object(); // this one is the singleton object
const tinderUser = {} // and this one is a non-singleton object
// console.log(tinderUser);

tinderUser.name = "Rupa";
tinderUser.id = "12345";
tinderUser.age = 30;
tinderUser.location = "New York";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


const regularUser = {
    name: "Rupa",
    email: "rupa@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Sonak",
            lastName: "Jha"
        }
    }
};


// console.table(regularUser);
// console.log(regularUser);

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);
// console.log(regularUser.fullName.userFullName.lastName);


// Let's combine 2 object
const obj1 = {
    1: "sonak",
    2: "Rupa",
    3: "monu",
    4: "sumit"
};


const obj2 = {
    5: "Sonu",
    6: "Ram",
    7: "Shyam",
    8: "Rupali"
};

// const joinTwoObjecs = {obj1, obj2};
// const joinTwoObjecs = Object.assign(obj1, obj2);
const joinTwoObjecs = Object.assign({}, obj1, obj2);

console.log(joinTwoObjecs);