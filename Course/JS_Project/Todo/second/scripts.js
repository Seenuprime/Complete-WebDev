document.addEventListener("DOMContentLoaded", () => {
  let task = document.querySelector("input");
  let add_task = document.querySelector("button");
  let lists = document.querySelector("ul");

  let all_tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  render();

  add_task.addEventListener("click", () => {
    if (task.value.trim() == "") return;
    all_tasks.push({
      id: Date.now(),
      value: task.value,
      completed: false,
    });
    store(all_tasks);
    render();
    task.value = "";
  });

  function render(tasks = all_tasks) {
    lists.innerHTML = "";
    tasks.forEach((item) => {
      let li = document.createElement("li");
      li.innerHTML = `
        <span>${item.value}</span>
        <button>Delete</button>
      `;
      lists.appendChild(li);

      if (item.completed) li.style.textDecoration = "line-through";

      li.querySelector("span").onclick = () => strike(li, item);
      li.querySelector("button").onclick = () => {
        li.remove();
        all_tasks = all_tasks.filter((t) => t.id !== item.id);
        store(all_tasks);
      };
    });
  }

  function strike(li, item) {
    item.completed = !item.completed;
    li.style.textDecoration = item.completed ? "line-through" : "none";
    store(all_tasks);
  }

  function store(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
