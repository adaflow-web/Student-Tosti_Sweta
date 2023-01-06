//JavaScript is a prototype based language rather than an object-oriented language. If there is one major difference between Python and JavaScript, this would be it.

//Adding a method to an object

/*We've seen what a JavaScript object is. What we haven't seen yet is that you can also add functions to an object. A function attached to an object is called a method just like functions attached to classes in Python. */
// var person = {
//     name : "Bob",
//     age : 19,
//     sayHi : function(){
//         console.log("Hello! I'm Bob.");
//         //we didn't name the function we stored in sayHi and just used function() {...}. This is another use case for anonymous functions.
//     }
// }
// person.sayHi();
// var person = {
//     name : "Bob",
//     age : 19,
//     sayHi : function(){
//         console.log("Hello! I'm " + this.name);   
//     }
// }
// person.sayHi();
//This is what the keyword this is used for: for an object to refer to itself. The famous self that we used in Python-----(this, think as the object itself. )

// var person = {
//     name : "Bob",
//     age : 19,
//     sayHi : function(){
//         console.log("Hello! I'm " + this.name);
    
//     },
//     callMe : function(){
//         console.log(this);
//     }
// }
// person.sayHi();
// person.callMe();

//executing the callMe method will print this and this is the whole object itself.

//Make one, make two, make many
/*Imagine you are building a game. In your game, you have enemies. They have some properties such as health points and strength. They also have methods, like threaten which enemies use to taunt you and call for help which they use to call more bad guys to help them. Using JavaScript, you could model these using an object*/

//Represent an enemy
// var enemy = {
//     healthPoints : 100 ,
//     strength : 10 ,

//     threaten : function(){
//         console.log("I'm going to destroy you ! ");
//     },
//     callHelp : function(){
//         console.log("Comme on my friends, Help me to destroy them !");

//     }
// }
//enemy threaten the player.
// enemy.threaten();
//call for help which they use to call more bad guys to help them.
// enemy.callHelp();
//Represent second enemy

// var enemy = {
//     healthPoints : 100 ,
//     strength : 10 ,

//     threaten : function(){
//         console.log("I'm going to destroy you ! ");   

//     },
//     callHelp : function(){
//         console.log("Comme on my friends, Help me to destroy them !");
//     }
// }

/* To avid dupilcation JavaScript have constructor functions. It is a special kind of function made to build new objects from a template.*/

function Enemy(healthPoints, strength){
    this.healthPoints = healthPoints;
    this.strength = strength;

    this.threaten = function(){
        console.log("I'm going to destroy you ! ");

    }
    this.callforHelp = function(){
        console.log("Comme on my friends, Help me to destroy them !");

    }
}
var meena = new Enemy(150, 15);
var leena = new Enemy(180, 10);
var keena = new Enemy(100, 20);

// meena.callforHelp();
//Enemy is a special kind of function called a constructor function. we create a new Enemy object by calling the constructor function preceded by the new keyword. This is how we call a constructor function. We assign the resulting object to the meena variable and create two more enemies a. Note that the Enemy code has been written only once.

// console.log("Leena has " + (leena.healthPoints).toString() + " healthpoints.");
// keena.threaten();
// console.log(meena);

//object created using a constructor function behaves like any other object

// console.log(keena.healthPoints);

// keena.healthPoints = 110 ;
// console.log(keena.healthPoints);

/* ******Sharing methods********** */

// function Person(name){
//     this.name = name,
//     this.sayHello = function(){
//         console.log("Hello! I'm " + this.name + ".");
//     }
// }
// var maggie = new Person("Maggie");
// var glenn = new Person("Glenn");

// maggie.sayHello();
// glenn.sayHello();

// it looks like both Person objects implement the same sayHello method, it is not the case. We can prove it with this simple test

// console.log(maggie.sayHello === glenn.sayHello);

function Person(name){
    this.name = name;
}
Person.prototype.sayHello = function(){
    console.log("Hello! I'm " + this.name + ".");

}
var maggie = new Person("Maggie");
var glenn = new Person("Glenn");

maggie.sayHello();
glenn.sayHello();
console.log(maggie.sayHello === glenn.sayHello);

//We used the strict equality operator (===) to check if both sayHello point to the same reference. Getting a result of false indicates that they don't which means that both objects store their own version of the method. In such a trivial example, this is not a real issue but imagine having a much more complex object with a lot more methods and many instances of this object in memory: you would clog the RAM quite fast!







//Every JavaScript object possess a prototype property. It is empty by default and you can't enumerate it with a for … next loop, for example. This prototype property is used mainly for sharing methods between objects so instead of adding our sayHello method to the Person constructor function, we will rewrite our example by adding it to the Person prototype: