
const myButton = document.getElementById("myButton");
const myText = document.getElementById("myText");

//div is important
const content = document.getElementById("content");

//create new paragraph

// newParagraph.innerText = "I'm new";
function addParagraph(){
    const newParagraph = document.createElement("p");
    newParagraph.innerText = myText.value;
    content.appendChild(newParagraph);
    newParagraph.className = "newClass";//attach the css file (class)
}

myButton.addEventListener("click",addParagraph);



