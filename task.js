const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-btn">Delete</button>
            `;

    // Append the new list item to the list
    taskList.appendChild(li);

    // Clear the input box
    taskInput.value = '';

    // Add event listener for the delete button
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    // Add event listener to mark as completed (Extra)
    li.addEventListener('click', (e) => {
        // Ensure the click isn't on the delete button
        if (e.target !== deleteBtn) {
            li.classList.toggle('completed');
        }
    });
}