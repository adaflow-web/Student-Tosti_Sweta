const content = document.getElementById("content");
const addItem = document.getElementById("addItem");
const removeItem = document.getElementById("removeItem");
const myText = document.getElementById("myText");
const clearAll = document.getElementById("clearAll");

function addContent(){
    const paragraph = document.createElement("p");
    paragraph.innerText = myText.value;
    localStorage.setItem("Item", paragraph);
    content.appendChild(paragraph);
    paragraph.className = "newClass";
    if (myText.value.length != 0){
        myText.value = null;  
    }             
}

addItem.addEventListener("click", addContent);

function removeContent(){
    const paragraph = document.getElementsByClassName("newClass");
    if (paragraph.length >= 1){
        content.removeChild(paragraph[(paragraph.length) - 1 ]);
    }
}

removeItem.addEventListener("click", removeContent);

function empty(){
    document.getElementById("content").innerHTML = "";
}

clearAll.addEventListener("click", empty)
