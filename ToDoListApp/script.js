document.addEventListener('DOMContentLoaded',()=>{

    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const clearAllBtn = document.getElementById('clearAllBtn');

    //function to add a new task

    const addTask = () =>{
        //step 1 : get the user entered value
        const taskText = taskInput.value.trim();
        if(taskText === ""){
            alert("Please enter a task.");
            return;
        }
        //step 2 : create li and span element
        const listItem = document.createElement('li');
        const completeCheckbox = document.createElement('input');
        completeCheckbox.type = 'checkbox';
        completeCheckbox.className = "complete-checkbox";
        completeCheckbox.addEventListener('change',()=>{
            listItem.classList.toggle('completed');
        });
        const taskSpan = document.createElement('span');
        taskSpan.className = 'taskText';
        taskSpan.textContent = taskText;

        //delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'x';
        deleteBtn.addEventListener('click',()=>{
            listItem.remove();
        })

        //step 3 : append elements
        listItem.appendChild(completeCheckbox);
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);

        //clear input
        taskInput.value = "";
    }
    const clearAllTasks = ()=>{
        taskList.innerHTML = "";
    }
    addTaskBtn.addEventListener('click',addTask);
    clearAllBtn.addEventListener('click',clearAllTasks);
})