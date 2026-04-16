// your code here
const form = document.querySelector('#create-task-form');
const taskList = document.querySelector('#tasks');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const taskDescription = document.querySelector('#new-task-description').value;
  
  if (taskDescription.trim() !== '') {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskDescription;
    taskList.appendChild(taskItem);
    
    // Clear the input field
    document.querySelector('#new-task-description').value = '';
  }
});
