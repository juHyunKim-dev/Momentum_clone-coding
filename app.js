const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저가 기본 행동을 하지 못하게 막음.
  loginForm.classList.add(HIDDEN_CLASSNAME); // loginForm에 hidden 클래스 추가
  const username = loginInput.value;
  console.log(username);
  greeting.innerText = `Hello ${username}`; //   greeting.innerText = "Hello " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
