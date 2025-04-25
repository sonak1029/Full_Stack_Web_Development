// scope
// let a = 10;
// var b = 20;
// const c = 30;

// console.log(`${a} ${b}, ${c}`);
var b = 200;
let a = 100;

if(true){
    let a = 10;
    var b = 20;
    const c = 30;
    // console.log(`INNER : ${a} ${b}, ${c}`);
}

// console.log(a);
// console.log(b);
// console.log(b);



// globle scope part 2
function one(){
    const name = "Sonak";

    function two(){
        const website = "Youtube";
        console.log(name);
    }

    two();
    // console.log(website);
    console.log(name);

}

// one();


// **************** Intresting Concept ********************
// First time to access kar liya kyuki mene ya sidha function declare liya tha isliya
console.log(addone(5));

function addone(num){
    return num + 1;
}


// addTwo(10);
// But yaha nahi kiya kyuki mene yaha par is function ko ek variable me store kiya h isliya ya run nahi ho raha h
const addTwo = function(val){
    return val + 2;
}
