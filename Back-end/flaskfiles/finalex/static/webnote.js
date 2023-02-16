
function onloadFun() {
    if (localStorage.length > 0) {
        const user = localStorage.getItem("username");
        return document.getElementById("username").innerHTML = " Welcome " + user;
    }
    else {
        let userName = prompt("Please enter your name", "");
        if (userName != null) {
            document.getElementById("username").innerHTML = "Hello " + userName;
            localStorage.setItem("username", userName);
        }
        else if (userName == "") {
            document.getElementById("username").innerHTML = ""
        }
        else {
            return false;
        }
    }
}
window.onload = onloadFun;







