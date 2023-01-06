/*
and is expressed by &&: if (age > 18 && location == 'Europe')
or is expressed by ||: if (color == 'blue' || color == 'green')
*/

var weather = "Raining";

// if (weather == "Raining"){
//     console.log("Take a umbrealla.")

// }
// else{
//     console.log("Take nothing.")
// }

var car = 10 ;

switch(car){
    case 1:
        console.log("Tata");
        break;

    case 2:
        console.log("Maruti");
        break;

    case 3:
        console.log("Honda");
        break;

    case 4 :
        console.log("Suzuki");
        break;

    case 5 :
        console.log("Bazaz");
        break;

    case 6:
        console.log("Toyota");
        break;

    //default:
        console.log("These are brands of cars.")
}

var day = 10;
//By omitting the break keyword, we are actually saying if the day is 1, 2, 3, 4 or 5. The result of the above example is: Week day

// switch(day){
//     case 1:
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//             console.log("Week day");
//             break;
//         case 6:
//         case 7:
//             console.log("Weekend");
//             break;

//         default:
//             console.log("Not a valid day!");

// }

//Ternary operator <condition> ? <value if true> : <value if false>

// var number = 16 ;

// var result = "";

// var finalResult = number >= 17 ? "Pass" : "Fail" ;

// console.log(finalResult);


//Loop

var day = ["Monday", "Tuesday", "Wednesday", "Thurseday", "Friday", "Satureday", "Sunday"];

// for(var i = 0 ; i < day.length ; i++){
//     console.log(day[i] + " is the " + (i + 1).toString() + " day of the week.");

// }

//while loop

// var i = 0;

// while (i < day.length){

//     console.log( (i+1).toString() + ". " + day[i]);
//     i ++ ;
    
// }

//For … in

// var car = {brand : "Toyota", 
//            country : "Japan",
//            year : 2000,
//            Model : "A1x",
//            Type : "Digital"
// }

// for (var x in car){
//     console.log(x + ": " + car[x]);
// }

//If you want to compare values and figure out if they are equal, you'd use ==. If you want to compare values and their data type, you use ===.
var number = 129 ;
var strNumber = "129";

console.log(number == strNumber);
console.log(number === strNumber);

//In JavaScript, not equal is represented by != or !==. The difference between != and !== is the same as between == and ===.
//These past units sum up the basic ES5 syntax you should be familiar with in order to proceed with learning modern JavaScript, ES2015 and beyond. To learn more about JavaScript syntax, the Mozilla Developer Network is an excellent reference and is available at developer.mozilla.org.

