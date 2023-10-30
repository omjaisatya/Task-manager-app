const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const priority = document.getElementById('priority').value;
    const dueDate = document.getElementById('due-date').value;
    const category = document.getElementById('category').value;
    createTask(taskText, priority, dueDate, category);
    taskInput.value = '';
  }
});

function createTask(text, priority, dueDate, category) {
  const taskItem = document.createElement('div');
  taskItem.classList.add('task-item');
  taskItem.innerHTML = `
    <span>${text}</span>
    <div class="details">
      <div class="priority">Priority: ${priority}</div>
      <div class="due-date">Due Date: ${dueDate}</div>
      <div class="category">Category: ${category}</div>
    </div>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
    <button class="complete">Complete</button>
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

  const completeBtn = taskItem.querySelector('.complete');
  completeBtn.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });
}
