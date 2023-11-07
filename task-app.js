
        document.addEventListener('DOMContentLoaded', () => {
        const taskInput = document.getElementById('taskInput');
        const addButton = document.getElementById('addButton');
        const taskList = document.getElementById('taskList');
        const taskModal = document.getElementById('task-modal');
        const editTaskInput = document.querySelector('.edit-input');
        const saveChangesButton = document.getElementById('save-edit-button');
        const closeEditModal = document.getElementById('close-modal');

    // Adding atask to the list

        addButton.addEventListener('click', () => {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                const li = document.createElement('li');
                const date = new Date().toLocaleString('en-US',{
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric'
                })
                li.innerHTML = `${taskText}<span class="date">${date}</span> <button class="edit-button">Edit</button> <button class="delete-button">Delete</button>`;
                taskList.appendChild(li);
                taskInput.value = '';
            }
        });

                // Editing Inputted Task

        taskList.addEventListener('click', (e) => {
            if (e.target.classList.contains('edit-button')) {
                const listItem = e.target.parentElement;
                const taskText = listItem.textContent.split('Edit')[0];
                editTaskInput.value = taskText.trim();
                taskModal.style.display = 'block';

                // Saving Changes Edited

                saveChangesButton.addEventListener('click', () => {
                    const editedText = editTaskInput.value.trim();
                    if (editedText !== '') {
                        listItem.innerHTML = `${editedText} <button class="edit-button">Edit</button> <button class="delete-button">Delete</button>`;
                        taskModal.style.display = 'none'; 
                    }
                });

                // Modal Closure

                closeEditModal.addEventListener('click', () => {
                    taskModal.style.display = 'none';
                });
            } else if (e.target.classList.contains('delete-button')) {
                const listItem = e.target.parentElement;
                taskList.removeChild(listItem);
            }
        });
    // Preventing User input

        taskInput.addEventListener('keydown', (e) => {
            if (e.keycode === 10) {
                e.preventDefault();
                addButton.click();
            }
        });
    });