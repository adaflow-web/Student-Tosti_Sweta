
const myBotton = document.getElementById("myBotton");
const myText = document.getElementById("myText");
const content = document.getElementById("content");

// const secondButton = document.getElementById("secondButton")
// const newText = document.getElementById("newText");
// const newContent = document.getElementById("newContent");




function addPara(){
    const paragraph = document.createElement("p");
    paragraph.innerText = myText.value;
    paragraph.className = "newClass";
    content.appendChild(paragraph);

}


myButton.addEventListener("click", addPara);

function addSecondPara(){
    const secondPara = document.createElement("p");
    secondPara.className = "newClass2";
    secondPara.innerText = newText.value;
    newContent.appendChild(secondPara);
}

secondButton.addEventListener("click", addSecondPara);
