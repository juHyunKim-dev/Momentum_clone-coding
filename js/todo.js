const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //빈 array 생성. toDo를 배열로 보관하기 위함.

function saveToDos() {
  // toDos array를 localStorage에 집어넣음
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // ("key", value)
  // JSON.stringify -> 객체든 배열이든 모두 문자열로 만들어줌.
  // localStorage에 저장할 때, array 는 저장할 수 없다. 오직 텍스트만 저장할 수 있다.
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id)); // parseInt로 type 맞춰줌 ( string -> int 로 변환)
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id; // html태그에 id 만듦.
  const span = document.createElement("span");
  span.innerText = newTodo.text; // span안에 텍스트 넣음
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
  const newTodoObj = {
    // toDos에 text를 저장하지 않고 object를 저장.
    text: newTodo,
    id: Date.now(), // 랜덤한 id 부여, 각각의 li item 구별하기 위함.
  };
  toDos.push(newTodoObj); // toDos 라는 array에 newTodoObj를 푸쉬함.
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; // 빈 array에 이전 todo들을 복원.
  parsedToDos.forEach(paintToDo);
  // forEach() : array의 각 item에 대해 function을 실행하게 해줌.
  // == paintToDo를 parsedToDos 배열의 요소마다 실행
  // == item이 object가 되는 것.
}

function sexyFilter() {}

[1, 2, 3, 4].filter(sexyFilter);
