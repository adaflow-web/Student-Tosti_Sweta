const content = document.getElementById("content");
const add = document.getElementById("add");
const myText = document.getElementById("myText");

window.onload = function(){
    content.innerText= localStorage.getItem("localValue.length");   
}

const localValue = [];

function addPara(){
    const para = document.createElement("p");
    para.className = "myClass";
    if((myText.value).length != 0){
        localValue.push(myText.value);
        localStorage.setItem(localValue.length, (myText.value));
        para.innerText = localStorage.getItem(localValue.length);
        content.appendChild(para);
        // myText.value = "";            
    }
}    
    
add.addEventListener("click", addPara);





