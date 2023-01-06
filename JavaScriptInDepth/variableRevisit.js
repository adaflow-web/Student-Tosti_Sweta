
//ES2015 adds const and let to define variables

const pi = 3.14 ;

// pi = 5;

//console.log(pi);
/*This helps writing code that is more robust by making sure a value cannot be inadvertly changed at run-time. Less bugs makes users happier!*/


//problem with constant

const car = {
    model : "EX-3",
    Brand : "Inova",
    Year : 2001,
}
//we can change values and add/remove keys within an object declared with const

// car.model = "EX-5";
// car["color"] = "White";

// console.log(car);

// car = {
//     model : "EX-9",
//     Brand : "Toyota",
//     Year : 2001,
// }

// to cahnge the value of a variable declared with let.

let number = 10;
let myString = "Hello World !";

// console.log(number);
// console.log(myString);
//The major difference in using let instead of var lies in block scoping. 

// function showDay(){
//     var array = ["Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur", "Sun"];
//     for(var i = 0; i < array.length; i++){
//         var message = ("Day " + (i + 1).toString() + " in a week is " + array[i] + "day.")
//         console.log(message);
//     }
//     console.log(message);
// }
// showDay();
//let, the variable is only available within the block it was declared in.When we talk about variables not being available outside of a certain perimeter, like a block or a function, we call this scoping.

function showDay(){
    let array = ["Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur", "Sun"];
    for(let i = 0; i < array.length; i++){
        let message = ("Day " + (i + 1).toString() + " in a week is " + array[i] + "day.")
        console.log(message);
    }
    console.log(message);
}
//showDay();


/*String interpolation ES2015 also introduced a new way to work with strings */

const message = "Hello";
const nameStudent = "Ricky";

let greetings = message + " " + nameStudent + "!" ;
console.log(greetings);

/*using interpolation To use interpolation, wrap string between backticks, use a dollar sign followed by curly braces to enclose a variable or operation. It sounds complicated but it's just ${variable}:*/

greetings = `${message} ${nameStudent}!`;
console.log(greetings);
console.log(`2 + 2 is equal to ${2 + 2}.`);


