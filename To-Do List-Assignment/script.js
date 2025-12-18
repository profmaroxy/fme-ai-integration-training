const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load saved tasks when page loads
document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  const taskText = input.value.trim();
  if (!taskText) return;

  const task = { text: taskText, completed: false };
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  displayTask(task);
  input.value = "";
}

function displayTask(task, index) {
  const li = document.createElement("li");
  li.textContent = task.text;

  if (task.completed) {
    li.classList.add("completed");
  }

  // Toggle completion
  li.addEventListener("click", () => {
    task.completed = !task.completed;
    li.classList.toggle("completed");
    updateStorage();
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
    removeTask(index);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function loadTasks() {
  const tasks = getTasks();
  taskList.innerHTML = ""; // Clear old list
  tasks.forEach((task, index) => displayTask(task, index));
}

function updateStorage() {
  const tasks = [];
  taskList.querySelectorAll("li").forEach((li) => {
    tasks.push({
      text: li.firstChild.textContent,
      completed: li.classList.contains("completed"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(index) {
  const tasks = getTasks();
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}