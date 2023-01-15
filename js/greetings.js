const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // 반복되는 string들은 대문자 변수로 저장함.
const USERNAME_KEY = "username"; // 실수 하면 안되는 string이라는 사실을 상기시킬 수 있음.

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저가 기본 행동을 하지 못하게 막음.
  loginForm.classList.add(HIDDEN_CLASSNAME); // loginForm에 hidden 클래스 추가
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  //함수 뒤의 (괄호) 안에 들어가는 것은 그 함수 안에서 사용할 변수의 이름을 임의로 지어주는 것 뿐
  greeting.innerText = `Hello, ${username}.`; //   greeting.innerText = "Hello " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
