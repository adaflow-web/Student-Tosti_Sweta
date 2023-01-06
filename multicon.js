
function chf(x){
    return (x * 1.13);
}
function celsius(y){
    return (y * 9 / 5) + 32 ;
}
function litter(z) {
    return (z / .264) ;    
}


function askcontinue() {
    var userInput = window.prompt("Do you want to do a conversion: yes/no");
    if (userInput == "yes".toLowerCase()){
        return true ;
    }    
    else if (userInput == "No".toLowerCase()){
        return false ;
    
    }
    else{
        console.log("Please Type only 'Yes' or 'No");

    }
    
}
function conversion(){
    var user_input = window.prompt("Which conversion ? (euros/celsius/litres)");

    if (user_input  == "euros" ||"celsius" || "litres"){

        return user_input;
    }
    else {
        exit()
    }
}

function value(){
    var amount = window.prompt("Which value do you want to convert");
    return amount ;
}

while (askcontinue()) {

    var conversionType = conversion();
    var valueToConvert = value ();
    var message = "The result is ";
 
    
    if (conversionType == "euros") {
        message += chf(Number(valueToConvert)).toString();
    } 
    else if (conversionType == "litres") {
        message += litter(Number(valueToConvert)).toString();
    } 
    else if (conversionType == "celsius") {
        message += celsius(Number(valueToConvert)).toString();
    } 
    else {
        console.log("Sorry ! I cant do this conversion...");
        break;
    }
    console.log(message);

}
