const todos = [];

const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

// Add task
addBtn.addEventListener("click", () => {
  const task = input.value.trim();
  if (task === "") return;

  todos.push({
    id: Date.now(),
    text: task,
    completed: false,
  });

  input.value = "";
  renderTodos();
});

// Render tasks
function renderTodos() {
  list.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.text;

    // completed task style
    if (todo.completed) {
      li.classList.add("completed");
    }

    // toggle completed
    li.addEventListener("click", () => {
      todo.completed = !todo.completed;
      renderTodos();
    });

    // delete button
    const btn = document.createElement("button");
    btn.textContent = "X";

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      removeTodo(todo.id);
    });

    li.appendChild(btn);
    list.appendChild(li);
  });
}

// Remove task
function removeTodo(id) {
  const index = todos.findIndex(todo => todo.id === id);
  todos.splice(index, 1);
  renderTodos();
}
