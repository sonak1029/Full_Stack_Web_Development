// Here we learn in deep foreach loop
const coding = ["js", "java", "cpp", "python", "swift"];

const value = coding.forEach( (item) => {
    // console.log(item);
} )

// console.log(value);


const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 10, 20, 30];

const n = num.filter( (item) => {
    return item > 35;
});
console.log(n);