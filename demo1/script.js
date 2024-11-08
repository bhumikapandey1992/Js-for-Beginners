document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const clearAllBtn = document.getElementById("clearAllBtn");
  
    // Function to add a new task
    const addTask = () => {
      const taskText = taskInput.value.trim();
  
      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }
  
      // Create task item elements
      const listItem = document.createElement("li");
  
      // Checkbox for marking as complete
      const completeCheckbox = document.createElement("input");
      completeCheckbox.type = "checkbox";
      completeCheckbox.className = "complete-checkbox";
      completeCheckbox.addEventListener("change", () => {
        listItem.classList.toggle("completed");
      });
  
      const taskSpan = document.createElement("span");
      taskSpan.className = "task-text";
      taskSpan.textContent = taskText;
  
      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.textContent = "×";
      deleteBtn.addEventListener("click", () => {
        listItem.remove();
      });
  
      // Append elements
      listItem.appendChild(completeCheckbox);
      listItem.appendChild(taskSpan);
      listItem.appendChild(deleteBtn);
      taskList.appendChild(listItem);
  
      // Clear input
      taskInput.value = "";
    };
  
    // Clear all tasks function
    const clearAllTasks = () => {
      taskList.innerHTML = "";
    };
  
    // Event listeners
    addTaskBtn.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") addTask();
    });
    clearAllBtn.addEventListener("click", clearAllTasks);
  });
  