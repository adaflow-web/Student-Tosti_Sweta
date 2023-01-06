
var price = 12.15 ; // a number
var message = "Something fun"; // a string

// var temperature;
// console.log(temperature)

// temperature = 2.3
// console.log(temperature)

// temperature = null
// console.log(temperature)

//Escape character

var message = "Hello\n\t \"World\"";

//console.log(message)
//functions

function sayHello(){
    console.log("Hello");
}
function greet(name){
    console.log("Hello " + name);
}
function addTwo(a, b){
    return (a + b);
}

// sayHello();
// greet("me");
// console.log(addTwo(12, 12));

//storing a function & anonymous functions

var multiply = function(x, y){
    return x * y ;

}

var result = multiply(5, 9);
//console.log(result);

//Using a function as a function parameter
function call (msgBefore, msgAfter, fn){
    console.log(msgBefore);
    fn();
    console.log(msgAfter);
}

function display(){
    console.log("Called inside the functional!")
}
//call("Before", "After", display);
call("Before", "After", function(){
    console.log("Called inside the function !");
});


