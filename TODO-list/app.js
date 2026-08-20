const submitTodo = document.getElementById("submit");
const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");

submitTodo.addEventListener("click", addTodo);

function addTodo(event) {
  const newLi = document.createElement("li");
  const checkbox = document.createElement("input");
  const closeInput = document.createElement("span");
  const textTodo = document.createTextNode(todoInput.value);


  closeInput.addEventListener("click", deleteTodo);

  closeInput.classList.add("close");
  closeInput.style.cursor = "pointer";
  closeInput.innerHTML = "&times;";

checkbox.type = 'checkbox';

  event.preventDefault();
  newLi.append(checkbox);
  newLi.append(textTodo);
  newLi.append(closeInput);
  todoList.append(newLi);
  emptyInput();
}

function emptyInput() {
  todoInput.value = "";
}

function deleteTodo(event) {
  event.target.parentElement.remove();
}


