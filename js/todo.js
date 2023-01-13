const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = []; //빈 array 생성. toDo를 배열로 보관하기 위함.

function saveToDos() {
  // toDos array를 localStorage에 집어넣음
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // ("key", value)
  // JSON.stringify -> 객체든 배열이든 모두 문자열로 만들어줌.
  // localStorage에 저장할 때, array 는 저장할 수 없다. 오직 텍스트만 저장할 수 있다.
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo; // span안에 텍스트 넣음
  const button = document.createElement("button");
  button.innerText = "✅";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); // span을 li 안으로 위치
  li.appendChild(button);
  toDoList.appendChild(li); //
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo); // toDos 라는 array에 newTodo를 푸쉬함.
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach((item) => console.log("this is the turn of ", item));
  // forEach() : array의 각 item에 대해 function을 실행하게 해줌.
  // arrow function(화살표 함수) : 함수를 더 짧게 작성하는 방법
}
