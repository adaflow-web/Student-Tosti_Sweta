//shorter syntax for creating functions
function sayHello(to){
    //console.log("Say hello " + to);
    //console.log(`Hello ${to}!`)
}
const saytHello = (to) =>{
    return `Hello ${to} !`;
}
// console.log(saytHello("Mala"));
//This is called fat arrow function.we assign an anonymous function to the sayHello constant. The function itself consist of the parameter(s) we will pass to the function, the arrow operator and then the body of the function.

//Only one parameter
const sayTohello = (to) => `Hello ${to}!`;
// console.log(sayTohello("Yuvraj"));
//function with more than one parameters need thr parenthesis
const addTwo = (a, b) => `The result is ${2 + 3}.` ;
// console.log(addTwo(3, 2));
const displayMsg = () => (("Welcome !"));
// console.log(displayMsg());
//function has more than one statement in its body( keep the curly braces)
const sayHi = (to) => {
    message = `Hello ${to}!`;
    console.log(message);
}
// sayHi("Tayana");

//**********************The strange case of binding this
//Arrow function solve a particular problem: the binding of this. In JavaScript, this behaves a little differently than in other languages or than Python self.this is bound to the function it is used in so in the case of a constructor function, it refers to the actual object. But watch what happens if this is used within an inner function (a function within a function
//  const person = {
//     firstName : "Daryl",
//     friends : [
//         'Rick',
//         'Michonne',
//         'Glenn'
//                ], 
//     showFriends: function(){
//         const that = this ;
//         function formaString(friendName){
//             return `${friendName} ia a friend of ${that.firstName}`
//         }
//         for (let i = 0 ; i < this.friends.length; i++){
//           console.log (formaString(that.friends[i]));
//         }
//      }    
//  }
//  person.showFriends();

// //Try to exercise a bit with double function

// //Ex 1
// const food = {
//     myname : "Sweta",
//     favFood : ["Asian", "Thai", "Italian", "Japon"],
//     myVeggi : function(){
//         const that = this ;
//         function foodString(foodName){
//             return `${foodName} food is ${that.myname} fav. food.`
//         }
//         for(let i = 0 ; i < this.favFood.length ; i++){
//             if (this.favFood[i] == "Asian"){
//                 console.log(foodString(this.favFood[i]));
//             }
//             else{
//                 console.log(`${this.myname} likes only vegetarian food.`)
//             }
            
//         }
//     }
// }
// console.log(food.myVeggi());

// //Ex,2
// const car = {
//     carType : "Digital",
//     cars : ["Tata", "Bajaj", "Inova", "Suzuki"],
//     myDrive : function(){
//         const that = this ;
//         function carBasic(carName){
//             return `${carName} is a ${that.carType} car.`
//         }
//         for (let i = 0 ; i < this.cars.length ; i++){
//             console.log(carBasic(that.cars[i]));
//         }
//     }
// }
// console.log(car.myDrive());


//Using arrow function syntax inside inner functions

const car = {
    carType : "Digital",
    cars : ["Tata", "Bajaj", "Inova", "Suzuki"],
    myDrive : function(){
        const that = this ;
        const carBasic = carName => `${carName} is a ${that.carType} car.`     
        for (let i = 0 ; i < this.cars.length ; i++){
            console.log(carBasic(that.cars[i]));
        }
    }
}
console.log(car.myDrive());








