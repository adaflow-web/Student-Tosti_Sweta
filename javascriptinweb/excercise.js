/*this program for Dynamic user interface. You will have the following elements:a paragraph of text which should be empty when the page is first opened, a textbox, a button. When the button is clicked, the paragraph of text will display what is currently in the textbox.*/

const paragraph = document.getElementById("paragraph");
const myText = document.getElementById("myText");
const myBotton = document.getElementById("myBotton");
const secondBotton = document.getElementById("secondBotton");
const secondText = document.getElementById("secondText");
const paragraph2 = document.getElementById("paragraph2");



function addTextInPara(){
    paragraph.innerText = myText.value;
    paragraph.className = "paragraph";
}

myBotton.addEventListener("click", addTextInPara);

//anonymous function
// myBotton.addEventListener("click",function(){
//     paragraph.innerText = myText.value;
// });
function addtextSecond(){
    paragraph2.innerText = secondText.value ;
    paragraph2.className = "paragraph2";

};

secondButton.addEventListener("click", addtextSecond);