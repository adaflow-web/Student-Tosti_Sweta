const content = document.getElementById("content");
const addItem = document.getElementById("addItem");
const removeItem = document.getElementById("removeItem");
const myText = document.getElementById("myText");
const clearAll = document.getElementById("clearAll");

let storageList = [];

function addContent(){
    const paragraph = document.createElement("p");
    paragraph.innerText = myText.value;
    localStorage.setItem("Item", paragraph);
    content.appendChild(paragraph);
    paragraph.className = "newClass";
    
    function store(){
        if (myText.value.length != 0){
            storageList.push(myText.value);
            localStorage.setItem((storageList.length), myText.value );
            // myText.value = null ;
        }  
    }
    store(); 
}

addItem.addEventListener("click", addContent);

function removeContent(){
    const paragraph = document.getElementsByClassName("newClass");
    if (paragraph.length >= 1){
        content.removeChild(paragraph[(paragraph.length) - 1 ]);
        localStorage.removeItem((paragraph.length - 1));
    }

}

removeItem.addEventListener("click", removeContent);

function empty(){
    document.getElementById("content").innerHTML = "";
    localStorage.clearAll;
}

clearAll.addEventListener("click", empty)
