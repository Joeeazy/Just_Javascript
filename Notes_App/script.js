//create variables from the html
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

//function that stores the notes in the browser
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}


//function that executes after create notes btn is clicked
createBtn.addEventListener("click", ()=>{
    //creates a p element and stores it as input box
    let inputBox = document.createElement("p");
    //creates another element with the img tag stores it as img
    let img = document.createElement("img");
    //in the p element = a class name is added input-box as used in the css 
    inputBox.className = "input-box";
    //making the inputbox editable
    inputBox.setAttribute("contenteditable", "true");
    //add delete img in the input box
    img.src = "images/delete.png";
    //appends inputbox in the notesContainer class also appends img in the inputbox
    notesContainer.appendChild(inputBox).appendChild(img);
})

//function that enables deletion
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

//enable linebreak after pressing enter on the keyboard
document.addEventListener("keydown", event=>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
