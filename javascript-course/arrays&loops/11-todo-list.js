const button = document.querySelector('.js-button');
const toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];


renderTodoList();


function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < toDoList.length; i++) {
    let todoObject = toDoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html =
    `<div>${name}</div>
    <div>${dueDate}</div>
    
    <button class="delete-btn" onclick="toDoList.splice(${i}, 1)
    renderTodoList();">
    Delete
    </button>`;
    todoListHTML += html;
    const container = document.querySelector('.container');
    container.innerHTML = todoListHTML;

  }


}

function addToDo() {
  const input = document.querySelector('.js-input');
  const name = input.value;

  const dateInputElement = document.querySelector('.js-date-input');
  const dueDate = dateInputElement.value;

  toDoList.push({
    name, dueDate
  });

  input.value = '';
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
  renderTodoList();
}


