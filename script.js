function addTask() {
    const taskInput = document.getElementById('taskInput');
    const inputText = taskInput.value.trim();

    if (inputText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = inputText;
    
    const completeButton = document.createElement('button');
    completeButton.className = 'checkBtn';
    completeButton.innerHTML = '✔';
    completeButton.onclick = () => {
        taskSpan.classList.toggle('completed');
    };

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Delete';
    removeButton.className = 'deleteBtn';
    removeButton.onclick = () => {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(completeButton);
    listItem.appendChild(taskSpan);
    listItem.appendChild(removeButton);

    taskList.appendChild(listItem);

    taskInput.value = ''; 
}
