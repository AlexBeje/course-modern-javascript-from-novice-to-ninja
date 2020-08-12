const addForm = document.querySelector(".add");
const todos = document.querySelector(".todos");

const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `

  todos.innerHTML += html;
}

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