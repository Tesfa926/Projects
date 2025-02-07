const taskNameInput = document.getElementById("taskName");
const taskPriorityInput = document.getElementById("taskPriority");
const taskDueDateInput = document.getElementById("taskDueDate");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskContainer = document.getElementById("task-container");

addTaskBtn.addEventListener('click',() =>{
const taskName = taskNameInput.value;
const taskPriority = taskPriorityInput.value;
const taskDueDate = taskDueDateInput.value;

const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    askItem.innerHTML = `
        <span class="task-name">${taskName}</span>
        <span class="priority-label">${taskPriority}</span>
        <span class="due-date">${taskDueDate}</span>
        <button class="deleteTaskBtn">Remove</button>
    `;
    taskContainer.appendChild(taskItem);
    sortTasks();
    taskNameInput.value = '';
    taskPriorityInput.value = 'High'; // or set to a default value
    taskDueDateInput.value = '';

});

taskContainer.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('deleteTaskBtn')) {
        const taskItem = e.target.parentElement;
        taskItem.remove();  // Remove the task
    }
});

function sortTasks(){
    const tasks = Array.from(taskContainer.children);

    tasks.sort((a, b) => {
        const priorityA = a.querySelector('.priority-label').innerText;
        const priorityB = b.querySelector('.priority-label').innerText;

        const priorityOrder = { 'High': 1, 'Medium': 2, 'Low': 3 };

        return priorityOrder[priorityA] - priorityOrder[priorityB];
    });

    tasks.forEach(task => taskContainer.appendChild(task));  // Reorder tasks in the container
}

