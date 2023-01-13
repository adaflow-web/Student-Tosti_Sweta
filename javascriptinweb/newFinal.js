const content = document.getElementById("content");
const add = document.getElementById("add");
const myText = document.getElementById("myText");
const deleteLast = document.getElementById("deleteLast");
const clearAll = document.getElementById("clearAll");

// content.innerText = localStorage.getItem();
function getStorage(){
    if (localStorage.length > 0){
        for(let i = 0 ; localStorage.length > i ; i++){
            const lineCode = document.createElement("p");
            let value = localStorage.getItem(i);
            lineCode.innerHTML = value;
            lineCode.className = "myClass";
            content.appendChild(lineCode);
        }
    }      
}
function addPara(){
    const para = document.createElement("p");
    para.className = "myClass";
    para.innerHTML = myText.value;
    content.appendChild(para);
    //localstorage
    const element = document.getElementsByClassName("myClass");
    let noElement = element.length - 1;

    localStorage.setItem(noElement, myText.value);
    myText.value = "";            
}
add.addEventListener("click", addPara);

function deleteLastElement(){
    const para = document.getElementsByClassName("myClass");

    if (para.length > 0){
        content.removeChild(para[(para.length) - 1]);
        localStorage.removeItem((para.length - 1));
    }
}
deleteLast.addEventListener("click", deleteLastElement);


function deleteAll(content){
    const element = document.getElementsByClassName("myClass");
    let i = 0;
    while (i != element.length){
        element[i].innerText = "";
        i = i + 1;
    }
}
clearAll.addEventListener("click", deleteAll);







