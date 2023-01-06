
var secret_number = Math.floor(Math.random() * 100);

var attempt = 0;
var gameWin = false;
var message = "";


while (gameWin != true){

    attempt += 1 ;
    var userInput = window.prompt("Give your number between 0 to 100.");

    if (userInput < secret_number){
    console.log("please type bigger number !");   
    }

    else if (userInput > secret_number){
    console.log("please type smaller number !");
    }

    else {
    console.log("Congrats!");
    gameWin = true
    }
 
}

if (attempt == 1){
    message = "attempt" ;
}
else{
    message = "attempts";

}

console.log("You succeed in " + attempt.toString() + " " + message + ".");



