let addButton = document.getElementById("add-btn")

function markAsCompleted(btnId){
    //console.log("btnid ::", btnid)
   document.getElementById(btnId).setAttribute("status","completed")
}

function markAll(){
  let todoItems =  document.getElementsByClassName("todo-Item")
        for(let i=0;i<todoItems.length;i++){
           let li = todoItems[i]
           if(!(li.getAttribute("status")==="completed")){
                li.setAttribute("status","completed")
                console.log(li)
            }
        }
}

    addButton.addEventListener("click", function() {
        let todoBox = document.getElementById("todo-editor")
        let todoText = todoBox.value
        let todoItem = document.createElement("li")
        todoItem.innerText = todoText
        document.getElementById("todo-list").appendChild(todoItem)
})

