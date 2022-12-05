const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME= "hidden";
const USERNAME_KEY = "username"; //string을 반복해서 사용할 때 사용 - 오타 방지


function onLoginSubmit(info){
    info.preventDefault(); //default of brower event is stop
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,username); // localstorage에서 이름 저장
    paintGreeting()
}

function paintGreeting(){
    const savedUsername = localStorage.getItem(USERNAME_KEY);

    greeting.innerText=`Hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


//loginForm.addEventListener("submit",onLoginSubmit);
//eventlistener의 첫번쨰 arg는 항상 박 벌어진 일에 대한 정보를 줌

// 함수우 ()같이 쓰면 한번 생행되고 끝남
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    //show the greetings
    paintGreeting()
}

const changeNameBtn = document.querySelector(".change-name-btn");

function handlechangeNameBlk(){
    greeting.classList.add(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
    loginForm.classList.remove(HIDDEN_CLASSNAME);    
}

changeNameBtn.addEventListener("click",handlechangeNameBlk);



