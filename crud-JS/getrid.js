const content = document.getElementById("content");
const myText = document.getElementById("myText");
const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");

function addPara(){
    const para = document.createElement("p");
    para.className= "newClass";
    para.innerText = myText.value;
    content.appendChild(para);
}
addButton.addEventListener("click", addPara);


function removePara(){
    const para = document.getElementsByClassName("newClass");  
    if(para.length > 0){
        content.removeChild(para[(para.length) - 1 ]);
    }

}
removeButton.addEventListener("click", removePara);
