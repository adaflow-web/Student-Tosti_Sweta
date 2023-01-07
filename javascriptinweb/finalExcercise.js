const content = document.getElementById("content");
const addItem = document.getElementById("addItem");
const removeItem = document.getElementById("removeItem");
const myText = document.getElementById("myText");
const clearAll = document.getElementById("clearAll");


function addContent(){
    const paragraph = document.createElement("p");
    paragraph.innerText = myText.value;
    content.appendChild(paragraph);
    paragraph.className = "newClass";
    
}
addItem.addEventListener("click", addContent);

function removeContent(){
    const paragraph = document.getElementsByClassName("newClass");
    if (paragraph.length >= 1){
        
        content.removeChild(paragraph[(paragraph.length) - 1 ]);
    }
}
removeItem.addEventListener("click", removeContent);