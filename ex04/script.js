const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const taskCountDisplay = document.getElementById("task-count");
let totalTasks = 0;
function updateTaskCount() {
    taskCountDisplay.textContent = totalTasks;
}
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a valid task!");
        return;
    }
    const li = document.createElement("li");
    li.textContent = taskText;
    li.addEventListener("click", function(event) {
        if (event.target.tagName !== "BUTTON") {
            li.classList.toggle("completed");
        }
    });
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
        totalTasks--;
        updateTaskCount();
    });
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    totalTasks++;
    updateTaskCount();
    taskInput.value = "";
}
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});