const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input")
const todoList = document.querySelector("#todo-list");

const TODOS_KEY="toDos";
let toDos=[]  //when it submits it starts with empty array

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));// it makes to siore items in array
}

function deleteToDo(event){
    //console.log(event.target.parentElement.innerText)
    const li=event.target.parentElement; //li that we want to delete
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //dealing with item in db
    li.remove();
    saveToDos(); //***important */ save new toDos in array
}

function paintToDo(newToDo){
    //painting todo on html
    const li= document.createElement("li");
    li.id = newToDo.id;
    const span= document.createElement("span");
    span.innerText=newToDo.text;
    const btn = document.createElement("button")
    btn.innerText="❌";
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);

    btn.addEventListener("click",deleteToDo)
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo=toDoInput.value;
    toDoInput.value="";
    const newTodoObj= {
        text:newToDo,
        id:Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);


const savedToDos= localStorage.getItem(TODOS_KEY) //string

if(savedToDos !== null){
    const parseToDos= JSON.parse(savedToDos) //string -> array // old toDos
    toDos=parseToDos;
    parseToDos.forEach(paintToDo); //각 array의 item에 동작을 할 수 있께 해줌
}

