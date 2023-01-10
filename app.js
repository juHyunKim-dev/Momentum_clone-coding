const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저가 기본 행동을 하지 못하게 막음.
  // event object는 preventDefault함수를 기본적으로 갖고 있음//
  console.log(loginInput.value);
}

function handleLinkClick(event) {
  event.preventDefault(); //브라우저가 기본 행동을 하지 못하게 막음.
  // event object는 preventDefault함수를 기본적으로 갖고 있음//
  console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
