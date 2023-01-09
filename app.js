const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저가 기본 행동을 하지 못하게 막음.
  // event object는 preventDefault함수를 기본적으로 갖고 있음//
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
