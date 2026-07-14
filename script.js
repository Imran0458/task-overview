const addBtn = document.getElementById("addBtn");
const taskCategory = document.getElementById("taskCategory");
const filterCategory = document.getElementById("filterCategory");
const clearBtn = document.getElementById("clearBtn");
const themeToggle = document.getElementById("themeToggle");
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("task-writer");
const taskCategory = document.getElementById("taskCategory");
const dueDateTime = document.getElementById("dueDateTime");
const taskList = document.getElementById("taskList");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.classList.remove("ri-sun-fill");
        themeToggle.classList.add("ri-moon-fill");
    } else {
        themeToggle.classList.remove("ri-moon-fill");
        themeToggle.classList.add("ri-sun-fill");
    }
});

addBtn.addEventListener("click", () => {

    const task = taskInput.value.trim();
    const category = taskCategory.value;
    const due = dueDateTime.value;

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    taskCard.innerHTML = `
        <div class="task-info">
            <h3>${task}</h3>
            <p>📂 ${category}</p>
            <p>📅 ${due}</p>
        </div>

        <div class="task-actions">
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        </div>
    `;

    taskList.appendChild(taskCard);

    taskInput.value = "";
    dueDateTime.value = "";

    const deleteBtn = taskCard.querySelector(".deleteBtn");

    deleteBtn.addEventListener("click", () => {
        taskCard.remove();
    });

    const editBtn = taskCard.querySelector(".editBtn");

    editBtn.addEventListener("click", () => {

        const newTask = prompt("Edit Task", task);

        if (newTask !== null && newTask.trim() !== "") {
            taskCard.querySelector("h3").textContent = newTask;
        }

    });

});