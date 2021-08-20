var addButton = document.getElementById("addButton");
var toDoList = document.getElementById("toDoList");
var todoInput = document.getElementById("todoInput");
var deleteAll = document.getElementById("deleteAll");
function markAsDone(event,todo){

    //console.log("TODO",todo);
    todo.classList.add("markAsDone");
}
function addToDoList(){
    var toDoMain = document.createElement('div');
    //toDoMain.id = String(Math.random());

    var todo = document.createElement('div');
    todo.appendChild(document.createTextNode(todoInput.value));
    if(todoInput.value ===''){
        alert("You must add something!!");
    }
    else{
        toDoMain.appendChild(todo);
    }

    var todoX = document.createElement('div');
    todoX.appendChild(document.createTextNode('X'));
    var todoEdit = document.createElement('div');
    todoEdit.appendChild(document.createTextNode('Edit'));
    
    var todoDone = document.createElement('div');
    todoDone.appendChild(document.createTextNode('Done'));

    todoDone.addEventListener("click", (event)=>markAsDone(event,todo));
    todoX.addEventListener("click",(event)=>closetask(event,toDoMain));


    toDoMain.appendChild(todoX);
    toDoMain.appendChild(todoDone);
    toDoMain.appendChild(todoEdit);

    toDoList.appendChild(toDoMain);
}
function closetask(event,toDoMain){
    toDoMain.removeChild(toDoMain.childNodes[0]);
}
function cleartask(event,toDoList){
    toDoList.innerHTML="";
}
deleteAll.addEventListener("click", (event)=>cleartask(event,toDoList));
addButton.addEventListener("click", addToDoList );