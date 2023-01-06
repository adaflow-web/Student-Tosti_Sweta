
const myButton = document.getElementById("myButton");
const myText = document.getElementById("myText");
const content = document.getElementById("content");

function addPara(){
    const paragraph = document.createElement("p");
    paragraph.innerText = myText.value;
    content.appendChild(paragraph);
    paragraph.className="myClass";

}
myButton.addEventListener("click", addPara);

/*When user click remove button title disappear..*/

// const removeTitle = document.getElementById("removeTitle");
// const title = document.getElementById("title");
// const main = document.getElementById("main");
// function titleRemove(){
//     main.removeChild(title);
// }
// removeTitle.addEventListener("click", titleRemove);


//To remove the first paragraph by remove button

const remove = document.getElementById("remove");

function removeFirstPara (){
    const paragraph = document.getElementsByClassName("myClass");
    if (paragraph.length >= 1){
        content.removeChild(paragraph[0]);
    }
   
}
remove.addEventListener("click", removeFirstPara);