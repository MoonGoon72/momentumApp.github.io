const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //일반적으로 string만 포함된 변수는 대문자 표기, 중요 정보가 아니므로 대문자로 함
const USERNAME_KEY = "username";  // String이 반복 사용될 때 실수하지 않으려면 변수로 만들어주면 좋다. 실수하면 오류로 알려주기 때문.

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`; //반드시 ``로 해주어야 함, js가 ${username}을 변수값으로 바꿔줌 "Hello" + username과 같다.
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
    event.preventDefault();  // 이 함수는 어떤 event의 기본 행동이든지 발생되지 않도록 막아줌
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);  // 저장된 정보가 없으면 null을 반환함.

if (savedUsername === null){

    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    
} else {
    // show the greetings
    paintGreetings(savedUsername);
}