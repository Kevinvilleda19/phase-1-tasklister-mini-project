document.addEventListener("DOMContentLoaded", (event) => {
});
const form = document.querySelector('#create-task-form');
const taskList = document.querySelector('#list');
form.addEventListener("submit", (event) => {
  event.preventDefault();

const taskDescription = document.querySelector('#new-task-description').value;

const taskListItem = document.createElement('li');
taskListItem.textContent = taskDescription;


taskList.appendChild(taskListItem);


document.querySelector('#new-task-description').value = '';
});

