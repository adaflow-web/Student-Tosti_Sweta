function onloadFun() {
    if (localStorage.length > 0){
        for (var key in localStorage){
            if (key == "username"){
                const user = localStorage.getItem("username");
                return document.getElementById("username").innerHTML = " Welcome " + user;    
            }
            else{
                let user = prompt("Please enter your name", "");
                document.getElementById("username").innerHTML = "Hello " + user;
            }
        }
    }    
    else {
        let user = prompt("Please enter your name", ""); 
        while(user == ""){
            user = prompt("Please enter your name", "");    
        }       
        if(user != null){
            document.getElementById("username").innerHTML = "Hello " + user;
            localStorage.setItem("username", user);
        }       
    }   
}
window.onload = onloadFun;
