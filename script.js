const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    createTask(taskText);
    taskInput.value = '';
  }
});

function createTask(text) {
  const taskItem = document.createElement('div');
  taskItem.classList.add('task-item');
  taskItem.innerHTML = `
    <span>${text}</span>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  `;

  taskList.appendChild(taskItem);

  const deleteBtn = taskItem.querySelector('.delete');
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  const editBtn = taskItem.querySelector('.edit');
  editBtn.addEventListener('click', () => {
    const newText = prompt('Edit task:', text);
    if (newText !== null && newText.trim() !== '') {
      taskItem.querySelector('span').textContent = newText;
    }
  });
}
