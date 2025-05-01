// Here we learn in deep foreach loop
// const coding = ["js", "java", "cpp", "python", "swift"];

// const value = coding.forEach( (item) => {
    // console.log(item);
    // return item;
// } )

// console.log(value);


const myNum = [23, 87, 15, 62, 39, 45, 20, 58, 41, 37];


// myNum.filter( (n) => {
//     n > 35; // but yaha par kuch bhe executive nahi hoga kyuki mene yaha par isko kuch bola he nahi ke isko khai store karo ya kuch bhe karo isliya
// } )


// Now we are going to assign the variable
// const newNum = myNum.filter( (num) => {
//     return num > 35;
// });
// console.log(newNum);


const newNum = [];

myNum.forEach( (num) => {
    if(num > 35){
        newNum.push(num);
    }
} )

// console.log(newNums);



// Now how to use filter let's see
const books = [
  {
    title: "The Alchemist",
    genre: "Fiction",
    publish: 1988,
    edition: 2004
  },

  {
    title: "Clean Code",
    genre: "Programming",
    publish: 2008,
    edition: 2008
  },

  {
    title: "Atomic Habits",
    genre: "Self-help",
    publish: 2018,
    edition: 2007
  },

  {
    title: "Sapiens",
    genre: "History",
    publish: 2011,
    edition: 2010
  },

  {
    title: "The Hobbit",
    genre: "Fantasy",
    publish: 1937,
    edition: 2014
  },

  {
    title: "You Don’t Know JS",
    genre: "Programming",
    publish: 2015,
    edition: 2010
  },

  {
    title: "Think and Grow Rich",
    genre: "Self-help",
    publish: 1937,
    edition: 1996
  },

  {
    title: "The Subtle Art of Not Giving a F*ck",
    genre: "Self-help",
    publish: 2016,
    edition: 2018
  },

  {
    title: "Rich Dad Poor Dad",
    genre: "Finance",
    publish: 1997,
    edition: 2005
  },

  {
    title: "The Pragmatic Programmer",
    genre: "Programming",
    publish: 1999,
    edition: 2019
  }
]


// const userBooks = books.filter( (bk) => bk.genre === "Self-help" );

const userBooks = books.filter( (bk) => {
  return bk.publish >= 2015 && bk.genre === "Programming"
} );

// console.log(userBooks);


const myNumber = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// const addNum = myNumber.map( (num) => num * 10 )

// console.log(addNum);

// Channing
const addNum = myNumber
    .map( (num) => num * 10 )
    .map( (num) => num + 5 )
    .filter( (num) => num >= (Math.pow(2, 8)) )


// console.log(addNum);


// Here we learn reduce methode ok
// const ininitialValue = 0;

// That is the first option to do this
// const myTotal = myNumber.reduce( 
//   (accumulator, currentValue) => accumulator + currentValue, ininitialValue 
// )


// Second option is this also convert in arrow function it your choice
// const myTotal = myNumber.reduce( function (accumulator, currentValue){
//   console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
//   return accumulator + currentValue;
// }, 0 )

// console.log(myTotal);


const shoppingCart = [
  {
    courseName: "Js Course",
    price: 2999
  },
  
  {
    courseName: "Java Course",
    price: 4555
  },

  {
    courseName: "Python Course",
    price: 999
  },

  {
    courseName: "mobile dev Course",
    price: 5999
  },

  {
    courseName: "data science Course",
    price: 12999
  },

]


// My Task is to add all the price and give me the total of all values
const addvalue = shoppingCart.reduce( (accumulator, item) => accumulator + item.price, 0 );
// console.log(addvalue);