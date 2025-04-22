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
    2: "Rupa"
};


const obj2 = {
    3: "Sonu",
    4: "Ram"
};


const obj3 = {
    5: "Mohan",
    6: "John Snow"
};


const obj4 = {
    7: "Mick",
    8: "Rohit"
};

// const joinTwoObjecs = {obj1, obj2};
// const joinTwoObjecs = Object.assign(obj1, obj2);
// const joinTwoObjecs = Object.assign({}, obj1, obj2, obj3, obj4);

// console.log(joinTwoObjecs);


// Mostly we can use spread 
const joinTwoObjecs = {...obj1, ...obj2, ...obj3, ...obj4};
// console.log(joinTwoObjecs);


// Database sa jab bhe value aayage to array of object aayage ok
const user1 = [
    {
        name: "Sonak",
        id: 2451,
        email: "abcd@gmail.com",
        location: "Bangalore"
    },

    {
        name: "Rupa",
        id: 2452,
        email: "efgh@gmail.com",
        location: "New York"
    },

    {
        name: "John Show",
        id: 2453,
        email: "ijkl@gmail.com",
        location: "England"
    }
]


// Now how to Access value
// console.log(user1[1].name);
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogedIn'));



// Object Part 3

// Array De-Structuring
const arr = [10, 20, 30];

const [a, b, c] = arr;

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30


// Object ke De-Structuring
const person = { name: 'Rahul', age: 25 };

const { name, age } = person;

// console.log(name); // Rahul
// console.log(age);  // 25

const course = {
    courseName: "Js in hindi",
    price: 999,
    courseInstructor: "Angela Yu"
}

const {courseInstructor: instructor} = course;

console.log(instructor);