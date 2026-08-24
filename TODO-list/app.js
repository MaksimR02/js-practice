const submitTodo = document.getElementById("submit");
const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");
const chooseUser = document.getElementById("userSelect");

submitTodo.addEventListener("click", addTodo);

function addTodo(event) {
  event.preventDefault();

  const todo = {
    completed: false,
    title: todoInput.value,
    userId: Number(chooseUser.value),
  };

  if (!todoInput.value.trim()) {
    alert("Please enter a todo");
    return;
  };

  if (!chooseUser.value) {
    alert("Please choose a user");
    return;
  };
  
  todos.unshift(todo);

  renderTodo(todo, users, true);
  emptyInput();
}

function emptyInput() {
  todoInput.value = "";
}

function deleteTodo(event) {
  event.target.parentElement.remove();
}

let users = [];
let todos = [];

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  users = data;

  users.forEach((user) => {
    const option = document.createElement("option");
    option.value = user.id;
    option.textContent = user.username;
    chooseUser.append(option);
  });
  return users;
}

async function fetchTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  todos = data;
  return todos;
}

Promise.all([fetchTodos(), fetchUsers()]).then(([todos, users]) => {
  todos.forEach((todo) => {
    renderTodo(todo, users);
  });
});

function renderTodo(todo, users, addToTop = false) {
  const user = users.find((user) => user.id === todo.userId);

  const newLi = document.createElement("li");
  const checkbox = document.createElement("input");
  const closeInput = document.createElement("span");

  const textTodo = document.createTextNode(todo.title);
  const todoForUser = document.createTextNode(" — " + user.username);

  closeInput.addEventListener("click", deleteTodo);

  closeInput.classList.add("close");
  closeInput.style.cursor = "pointer";
  closeInput.innerHTML = "&times;";

  checkbox.type = "checkbox";

  checkbox.checked = todo.completed;

  newLi.append(checkbox);
  newLi.append(textTodo);
  newLi.append(todoForUser);
  newLi.append(closeInput);

  if (addToTop) {
    todoList.prepend(newLi);
  } else {
    todoList.append(newLi);
  }
}
