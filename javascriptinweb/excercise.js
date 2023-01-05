/*this program for Dynamic user interface. You will have the following elements:a paragraph of text which should be empty when the page is first opened, a textbox, a button. When the button is clicked, the paragraph of text will display what is currently in the textbox.*/

const paragraph = document.getElementById("paragraph");
const myText = document.getElementById("myText");
const myBotton = document.getElementById("myBotton");

function addTextInPara(){
    paragraph.innerText = myText.value;
}

myBotton.addEventListener("click", addTextInPara);

//anonymous function
// myBotton.addEventListener("click",function(){
//     paragraph.innerText = myText.value;
// });
