// function storename(){
//     //retrieving data
//     const username = document.getElementById("username").value;
//     //storing data
//     

// }
function onloadFun (){
    if ( localStorage.length > 0 ){
        const user = localStorage.getItem("username");
        return document.getElementById("username").innerHTML = user + "! Welcome back .";
   
    }
    else{ 
        let userName = prompt("Please enter your name","" );
        if(userName != "" ){
           // document.getElementById("username").innerHTML = "Hello, " + userName; 
            localStorage.setItem("username", userName);
        }
        
    }

    location.href="/";    
}




