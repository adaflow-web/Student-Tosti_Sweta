const title = document.getElementById("title");
const myButton = document.getElementById("myButton");
const myText = document.getElementById("myText");
// const nonExisting = document.getElementById("nonExisting");
// const paragraphs =document.getElementsByClassName("paragraphs");
// const paragraphs =document.getElementsByTagName("p");

// console.log(title);
//console.log("hello");

// if (nonExisting ==null) {
//     console.log("This element doesn't exist");

// }else{
//     console.log(nonExisting);
// }

// for (let i = 0 ; i < paragraphs.length ; i++){
//     console.log(paragraphs[i]);
// }
// title.innerHTML = "<span>The title<\span> has changed";
// myButton.value = "Changed too !";

// Event reference You can get a full list of events that you can use for your event listeners here: developer.mozilla.org/en-US/docs/Web/Events. Do something when something is happen

// function changeTitle(){
//     title.innerText = "New Title";
// }
//only the name of the function not for execute by line.execute only when user 'click' .so no () is there.
// myButton.addEventListener("click", changeTitle);

// function changeTitle(){
//     title.innerText = myText.value;
// }
// myButton.addEventListener("click", changeTitle);

//Anoy function
myButton.addEventListener("click", function(){
    title.innerText = myText.value;
});