const titleInput = document.querySelector('.title input');
const taskInput = document.querySelector('.todo input');
const submitButton = document.querySelector('.submit');
const todoList = document.querySelector('ul');

submitButton.addEventListener('click', (e) => {
  e.preventDefault(); 

  const title = titleInput.value.trim();
  const task = taskInput.value.trim();
  
  if (title === '' || task === '') {
    alert('Please enter a title and a task description.');
    return;
  }
  
  const listItem = document.createElement('li');
  const taskText = document.createTextNode(`${title}: ${task}`);
  listItem.appendChild(taskText);

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Delete';
  listItem.appendChild(deleteButton);

  todoList.appendChild(listItem);

  titleInput.value = '';
  taskInput.value = '';
});

todoList.addEventListener('click', (e) => {
  if (e.target.nodeName === 'BUTTON') {
    const listItem = e.target.parentNode;
    todoList.removeChild(listItem);
  }
});

function saveTodoList() {
  localStorage.setItem('todoList', todoList.innerHTML);
}

submitButton.addEventListener('click', (e) => {
  saveTodoList();
});

todoList.addEventListener('click', (e) => {
  saveTodoList();
});

if (localStorage.getItem('todoList')) {
  todoList.innerHTML = localStorage.getItem('todoList');
}








