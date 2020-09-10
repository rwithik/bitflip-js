let completed = [
  {
    id: 1,
    text: "First completed task",
  },
];
let notCompleted = [
  {
    id: 2,
    text: "First not completed task",
  },
];

const completedDiv = document.getElementById("completed");
const notCompletedDiv = document.getElementById("not-completed");

const newTaskForm = document.getElementById("new-task-form");
const newTaskInput = document.getElementById("new-task-input");

const deleteTask = (id) => {
  completed = completed.filter((t) => {
    return t.id !== id;
  });
  notCompleted = notCompleted.filter((t) => {
    return id !== t.id;
  });
  const t = document.getElementById(`task${id}`);
  t.remove();
};

const markAsCompleted = (id) => {
  const task = notCompleted.filter((t) => {
    return t.id === id;
  })[0];
  // console.log(task);
  deleteTask(id);
  completed.push(task);

  const t = document.createElement("div");
  t.classList.add("task");
  t.id = `task${id}`;
  t.innerHTML = `${task.text}
    <i class="fas fa-trash-alt" onclick="deleteTask(${t.id})"></i>
  `;
  completedDiv.appendChild(t);
};

notCompleted.forEach((t) => {
  // console.log(t);
  const task = document.createElement("div");
  task.classList.add("task");
  task.id = `task${t.id}`;
  task.innerHTML = `${t.text}
    <i class="fas fa-trash-alt" onclick="deleteTask(${t.id})"></i>
    <i class="fas fa-check" onclick="markAsCompleted(${t.id})"></i>
  `;
  notCompletedDiv.appendChild(task);
});

completed.forEach((t) => {
  // console.log(t);
  const task = document.createElement("div");
  task.classList.add("task");
  task.id = `task${t.id}`;
  task.innerHTML = `${t.text}
    <i class="fas fa-trash-alt" onclick="deleteTask(${t.id})"></i>
  `;
  completedDiv.appendChild(task);
});

newTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = newTaskInput.value;
  const newTask = {
    id: Math.ceil(Math.random() * 1000),
    text: text,
  };
  notCompleted.push(newTask);
  const task = document.createElement("div");
  task.classList.add("task");
  task.id = `task${newTask.id}`;
  task.innerHTML = `${newTask.text}
    <i class="fas fa-trash-alt" onclick="deleteTask(${newTask.id})"></i>
    <i class="fas fa-check" onclick="markAsCompleted(${newTask.id})"></i>
  `;
  notCompletedDiv.appendChild(task);
});
