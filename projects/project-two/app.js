const addForm = document.querySelector(".add");
const todos = document.querySelector(".todos");
const search = document.querySelector(".search input");

const localStoredTodos = JSON.parse(localStorage.getItem("todos"));

const generateTemplate = (todo) => {
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
  `;
  todos.innerHTML += html;
};

// initialize the local stored values
localStoredTodos.forEach((storedTodo) => {
  generateTemplate(storedTodo);
});

// add a new todo function
const addTodo = (todo) => {
  generateTemplate(todo);
};

// add a new todo on submit
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //* add -> the name of the addForm input
  //* trim -> remove any spaces from before and after
  const todo = addForm.add.value.trim();

  //* if the input value is not null add a todo
  if (todo.length) {
    addTodo(todo);
    //* reset all the inputs of the form
    addForm.reset();
  }

  //* add an array of todos to the local storage
  localStoredTodos.push(todo);
  localStorage.setItem("todos", JSON.stringify(localStoredTodos));
});

// delete todos
todos.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    //* remove the clicked item from the local store array
    localStoredTodos.forEach((storedTodo, index) => {
      if (storedTodo === e.target.parentElement.textContent.trim()) {
        localStoredTodos.splice(index, 1)
        localStorage.setItem("todos", JSON.stringify(localStoredTodos));
      }
    })
  }
});

// filter todos, removve the ones that don't match with the input text
const filterTodos = (inputValue) => {
  //* filter trough the todos children (using text content) and add a class to the ones that don't include the inserted input value
  Array.from(todos.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach((todo) => todo.classList.add("filtered"));

  //* remove the previously added classes if the input value is modified / deleted
  Array.from(todos.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(inputValue))
    .forEach((todo) => todo.classList.remove("filtered"));
};

// get the input value on keyup
search.addEventListener("keyup", (e) => {
  const inputValue = e.target.value.trim().toLowerCase();
  filterTodos(inputValue);
});