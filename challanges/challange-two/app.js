const addForm = document.querySelector(".add");
const todos = document.querySelector(".todos");
const search = document.querySelector(".search input")

const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `

  todos.innerHTML += html;
}

// add todos
addForm.addEventListener("submit", e => {
  e.preventDefault();
  //* add -> the name of the addForm input
  //* trim -> remove any spaces from before and after
  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemplate(todo)
    //* reset all the inputs of the form
    addForm.reset();
  };
})

// delete todos
todos.addEventListener("click", e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
})

// filter todos
const filterTodos = (inputValue) => {
  //* filter trough the todos children (using text content) and add a class to the ones that don't include the inserted input value
  Array.from(todos.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => todo.classList.add('filtered'));

  //* remove the previously added classes if the input value is modified / deleted
  Array.from(todos.children)
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => todo.classList.remove('filtered'));
}

// get the input value
search.addEventListener("keyup", e => {
  const inputValue = e.target.value.trim().toLowerCase();
  filterTodos(inputValue);
})