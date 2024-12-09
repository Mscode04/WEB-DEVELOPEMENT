// Acces The Element
let todoInput=document.querySelector(".text");
console.log(todoInput)
let todoButton=document.querySelector(".btn");
console.log(todoButton)
let todoParent=document.querySelector(".list-parent");
let todateParent1=document.querySelector(".times");
let todateParent2=document.querySelector(".dates");
let box=document.querySelector(".manager");
// Events 
todoButton.addEventListener('click',addToDo);
todoParent.addEventListener('click',Del);
todoParent.addEventListener('click',Fine);

// Main Function 
function addToDo(e){
if(todoInput.value.trim() !== ""){
    // Child div  of Ul tag
    const toDiv=document.createElement("div")
    toDiv.classList.add("listchid")
    // No reload loading
    e.preventDefault()
    // create li element as input text
    const tolist=document.createElement("li")
    tolist.classList.add("lichid")
    tolist.innerHTML=todoInput.value;
    //delete button
    const trash=document.createElement("button")
    trash.classList.add("btn2")
    trash.innerHTML="Delete";
    // finsh button
    const Complete=document.createElement("button")
    Complete.classList.add("btn3")
    Complete.innerHTML="More";
    
    box.classList.remove('hidden');

    // appaned to all in parent ul
    toDiv.appendChild(tolist);
    toDiv.appendChild(trash);
    toDiv.appendChild(Complete);
    todoParent.appendChild(toDiv);
     // clear the input
    todoInput.value="" 
}}
// delete function
function Del(e){
    const item=e.target;
    console.log(item.classList)
    if (item.classList[0]==='btn2'){
        const data=item.parentElement;
        data.remove()
    }
}

// finish function
function Fine(e){
    const item = e.target;
    console.log(item.classList)
    if (item.classList[0] === 'btn3') {
        var itemDiv=document.createElement("div")
        itemDiv.classList.add("child2")
        const fine=document.createElement("button")
        fine.classList.add("btn4")
        fine.innerHTML="Finish";

        const todate=document.createElement("li")
        todate.classList.add("child3")
        todate.innerHTML=todateParent1.value+todateParent2.value;
        
        itemDiv.appendChild(fine);
        itemDiv.appendChild(todate);
        todoParent.appendChild(itemDiv); 
        

    }
}


function Fine(e) {
    const item = e.target;
    if (item.classList[0] === 'btn3') {
        const parentDiv = item.parentElement;
        const oldChild = parentDiv.querySelector('.child2');
        
        if (oldChild) {
            // Remove existing child elements if they exist
            oldChild.remove();
        } else {
            // Create the new elements
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("child2");
            const fine = document.createElement("button");
            fine.classList.add("btn4");
            fine.innerHTML = "Finish";

            const todate = document.createElement("li");
            todate.classList.add("child3");
            todate.innerHTML = todateParent1.value + ' ' + todateParent2.value;

            itemDiv.appendChild(fine);
            itemDiv.appendChild(todate);
            parentDiv.appendChild(itemDiv);
        }
    }
}

todoParent.addEventListener('click',Fine1);
function Fine1(e) {
    const item = e.target;
    if (item.classList.contains('btn4')) {
        const data = item.parentElement.parentElement;
        data.classList.toggle('finished');
        
    }
}
    
    