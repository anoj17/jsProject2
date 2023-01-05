window.addEventListener("load",()=>{

const forms = document.querySelector(".form")
const intput1 = document.querySelector(".input")
//const btns = document.querySelector("btn")
const parent1 = document.querySelector(".parent")

forms.addEventListener("submit",(event)=>{
    event.preventDefault();

    const inputText = intput1.value;
    if(!inputText){
        alert("Please enter any text")
        return;
    }

    const childDiv = document.createElement("div");
    childDiv.classList.add("grand")

    const edits = document.createElement("button");
    edits.classList.add("edit")
    edits.innerHTML = "Edit";

    const deletes = document.createElement("button");
    deletes.classList.add("delete")
    deletes.innerHTML = "Delete";
    intput1.value = ""

    const inputs = document.createElement("input");
    inputs.classList.add("text")
    inputs.type = "text"
    inputs.value = inputText;
    inputs.setAttribute("readonly","readonly")

    edits.addEventListener("click",()=>{
        if(edits.innerText.toLocaleLowerCase() == "edit"){
        inputs.removeAttribute("readonly")
        inputs.focus()
        edits.innerHTML = "save";
        }else{
            inputs.setAttribute("readonly","readonly")
            edits.innerHTML = "Edit";
        }
    })
    deletes.addEventListener("click",()=>{
        childDiv.remove();
    })

    childDiv.appendChild(edits)
    childDiv.appendChild(deletes)
    childDiv.appendChild(inputs)

    parent1.appendChild(childDiv);

});

});
