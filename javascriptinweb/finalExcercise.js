const content = document.getElementById("content");
const addItem = document.getElementById("addItem");
const removeItem = document.getElementById("removeItem");


function addContent(){
    const para = document.createElement("p");
    para.innerText = myText.value;
    content.appendChild(para);
}
addItem.addEventListener("click", addContent);

function removeContent(){
    const para = document.createElement("p");
    if (para.length >= 1){
        content.removeChild(para);
    }
}
removeItem.addEventListener("click", removeContent);