const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form Button");

function onLoginBtnClick() {
  console.log("Hello", loginInput.value); // input의 내용을 가져오려면 value라는 property를 찾아봐야 됨.
}

loginButton.addEventListener("click", onLoginBtnClick);
