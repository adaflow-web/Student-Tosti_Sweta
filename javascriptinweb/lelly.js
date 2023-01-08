const para = document.getElementById("para")
const Text = document.getElementById("Text")
const adding = document.getElementById("add")
const last = document.getElementById("last")
const clearme = document.getElementById("clearme")
const first = document.getElementById("first")

function addvalue(){
    const newParagraph = document.createElement("p")
    newParagraph.innerText = Text.value;
    newParagraph.className = "nice"
    para.appendChild(newParagraph)
    localStorage.setItem()
}
adding.addEventListener("click", addvalue)

function remove(){
    const removeparagraph = document.getElementsByClassName("nice")
    if (removeparagraph.length > 0){
        para.removeChild(removeparagraph[0])
    } else{
        alert("There is nothing")
    }
    localStorage.setItem()
}
first.addEventListener("click",remove)

function remove1(){
    const removeparagraph1 = document.getElementsByClassName("nice")
    if (removeparagraph1.length > 0){
        para.removeChild(removeparagraph1[removeparagraph1.length-1])
    } else{
        alert("There is no text")
    }
    localStorage.setItem()
}
last.addEventListener("click", remove1)

function clearAll(){
    para.clear();
}
clearme.addEventListener("click", clearAll)

localStorage.setItem()