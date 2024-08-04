const button = document.querySelector('.js-button');
const toDoList = ['make dinner', 'laundry', 'walk the dog'];


renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  for (let i = 0; i < toDoList.length; i++) {
    let todo = toDoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
    const container = document.querySelector('.container');
    container.innerHTML = todoListHTML;
  }
}

function addToDo() {
  const input = document.querySelector('.js-input');
  const value = input.value;

  toDoList.push(value);

  input.value = '';
  renderTodoList();
}