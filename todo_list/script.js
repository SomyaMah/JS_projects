let tasks = []

window.addEventListener("DOMContentLoaded", () => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
        tasks = JSON.parse(stored);
        tasks.forEach(task => renderTask(task));
    }
});

document.getElementById("todo-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const input = document.getElementById("todo-input");
    const taskText = input.value.trim();
    if (taskText === "") return;

    const newTask = { text: taskText, completed: false };
    tasks.push(newTask);
    saveTasks();
   // renderTask(newTask);

    addTask(taskText);
    input.value = "";
});

function addTask(text) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task.text;
    span.classList.add("task-text");

    //complete button
    const completeBtn = createButton("✓", "complete-btn", () => {
        span.classList.toggle("completed");
    });

    //edit button
    const editBtn = createButton("Edit", "edit-btn", function () {
        if (editBtn.textContent === "Edit") {
            span.setAttribute("contenteditable", "true");
            span.focus();
            editBtn.textContent = "Save";
        } else {
            span.setAttribute("contenteditable", "false");
            editBtn.textContent = "Edit";
        }
    });

    //delete button
    const deleteBtn = createButton("✕", "delete-btn", () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    document.getElementById("todos").appendChild(li);
}

function createButton(text, className, onClick) {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.className = className;
    btn.addEventListener("click", onClick);
    return btn;
}
